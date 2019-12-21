const axios = require("axios");
const pg = require("./database");

const random = (from, range) => Math.floor(Math.random() * range + from);

const delay = time => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
};

(async () => {
  console.log("Start like");
  for (let i = 0; i < 999999999; i++) {
    await delay(10000);
    const token =
      "EAAAAZAw4FxQIBABdSkAlxaw7b311toNtqWKzjOP8FfkVosZCrTyUhmnMlcw42z9CjaWEH7O1Oa4k3DB5H8fFQ6v8Wc1RuL0ZCORyZBvERZCzVL5tMjep2fYZBGybi0fe555itTGg3J0EEnGxxkQfTOfXI6gL9VmunzLv8VOb89CwZDZD";
    const res = await axios.get(
      `https://graph.facebook.com/v2.6/me/home?access_token=${token}`
    );
    const feed = res.data.data;
    const likeList = [];
    feed.map(s => {
      if (s.id.startsWith("1000")) {
        likeList.push(s.id);
      }
    });

    const data = await pg("likes_posts")
      .select("*")
      .where("uid", likeList[0]);

    if (!data.length) {
      console.log(likeList[0]);
      const like = await axios.post(
        `https://graph.facebook.com/v2.6/${likeList[0]}/likes?access_token=${token}`
      );
      await pg("likes_posts").insert({ uid: likeList[0] });
    }
  }
})();
