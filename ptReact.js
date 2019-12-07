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

      const links = await pg("profiles")
        .select([
          "id",
          "uid",
          "followers",
          "reactions",
          "point",
          "photos.created_at"
        ])
        .innerJoin("photos", "profiles.uid", "photos.owner_id")
        .whereNull("reactions")
        .andWhere("height", ">", 1400)
        .andWhere("followers", ">", 500)

        // .whereNotNull("reactions")
        .limit(300);

      // console.log("total", links.length);
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
          const now = Math.sqrt(
            Math.sqrt((Date.now() - p.created_at) / 17280000000)
          );
          const point = Math.floor(
            (reactions * Math.sqrt(Math.sqrt(Math.sqrt(reactions))) * 1000) /
              ((p.followers + 5000) * now)
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
        console.log("Restart", err.response.data.error);
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
