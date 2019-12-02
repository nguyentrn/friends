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
  for (let i = 0; i < 1000; i++) {
    try {
      const links = await pg
        .select("owner_id", "id", "picture", "created_at")
        .from("photos")
        .whereNull("reactions");

      console.log("total", links.length);
      for (let i = 0; i < links.length; i++) {
        await delay(random(100, 300));
        const token =
          "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
        const p = links[i];
        outside = p.id;
        const url = `https://graph.facebook.com/v2.6/${p.owner_id}_${p.id}/reactions?summary=total_count&access_token=${token}&limit=500`;
        let data = await axios.get(url);
        const reactions = data.data.summary.total_count;

        if (reactions < 100 && Date.now() - p.created_at * 1 > 8640000000) {
          await pg("photos")
            .where({ id: p.id })
            .del();
        } else {
          console.log(reactions);

          await pg("photos")
            .update({ reactions })
            .where({ id: p.id });
        }
      }
    } catch (err) {
      console.log("Restart", err.response.data.error.message);

      console.log("Restart", outside);
      if (
        err.response &&
        (err.response.data.error.message.includes("Unsupported get request") ||
          err.response.data.error.message.includes(
            "Người dùng này không có trang cá nhân nào."
          ))
      ) {
        console.log(0);
        await pg("photos")
          .where({ id: outside })
          .del();
      }
    }
  }
})();
