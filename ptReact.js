const axios = require("axios");
const pg = require("./database");
const upsert = require("./upsert");

const random = (from, range) => Math.floor(Math.random() * range + from);

const delay = time => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
};

(async () => {
  console.log("Start scraping");
  let outside = "";
  for (let i = 0; i < 4000000; i++) {
    try {
      // const links = await pg
      //   .select("owner_id", "id", "picture", "created_at")
      //   .from("photos")
      //   .whereNull("reactions")
      //   .limit(100);

      // const links = await pg("profiles")
      //   .select([
      //     "id",
      //     "uid",
      //     "followers",
      //     "reactions",
      //     "photos.point",
      //     "photos.created_at"
      //   ]).count
      //   .innerJoin("photos", "profiles.uid", "photos.owner_id")
      //   .whereNull("reactions")
      //   .andWhere("height", ">", 2000)
      //   .andWhere("photos.created_at", ">", "2019-1-1")
      //   .limit(3);

      const links = await pg
        .with(
          "with_alias",
          pg.raw(
            "SELECT owner_id,count(*) FROM photos WHERE point IS NULL AND height>2000 GROUP BY owner_id ORDER BY count"
          )
        )
        .select([
          "id",
          "uid",
          "followers",
          "reactions",
          "photos.point",
          "photos.created_at",
          "with_alias.count",
          "photos.height"
        ])
        .from("profiles")
        .innerJoin("with_alias", "profiles.uid", "with_alias.owner_id")
        .innerJoin("photos", "profiles.uid", "photos.owner_id")
        .whereNull("reactions")
        .andWhere("photos.height", ">", 2000)
        .orderBy("with_alias.count")
        .limit(1000);
      // .select("*")
      // .from("with_alias");

      // console.log(links);
      for (let i = 0; i < links.length; i++) {
        await delay(random(100, 300));
        const token =
          "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
        const p = links[i];
        outside = p.id;
        const url = `https://graph.facebook.com/v2.6/${p.uid}_${p.id}/reactions?summary=total_count&access_token=${token}&limit=500`;
        // console.log(url);
        let data = await axios.get(url);
        let reactions = 0;
        if (data.data.summary) {
          reactions = data.data.summary.total_count;
        }

        if (reactions < 5 && Date.now() - p.created_at * 1 > 432000000) {
          // console.log(url);

          await pg("photos")
            .where({ id: p.id })
            .del();
        } else {
          console.log(reactions);
          // const now = Math.sqrt(
          //   Math.sqrt((Date.now() - p.created_at) / 17280000000)
          // );
          const now = Math.pow(
            (new Date(p.created_at) - new Date("2012-1-1")) / 100000000000,
            2
          );

          const point = Math.floor(
            (reactions *
              Math.sqrt(Math.sqrt(Math.sqrt(reactions))) *
              1000 *
              now) /
              (p.followers + 5000)
          );
          // console.log(reactions, point);
          await pg("photos")
            .update({ reactions, point })
            .where({ id: p.id });
        }
      }
    } catch (err) {
      if (
        err.response &&
        (err.response.data.error.message.includes("Unsupported get request") ||
          err.response.data.error.message.includes(
            "Người dùng này không có trang cá nhân nào."
          ))
      ) {
        // console.log("Restart", err.response.data.error);
        // console.log("Restart", outside);
        // console.log(0);
        await pg("photos")
          .where({ id: outside })
          .del();
      } else {
        // console.log(err);
        console.log("cant handle");
      }
    }
  }
})();
