const axios = require("axios");
const pg = require("./database");

const random = (from, range) => Math.floor(Math.random() * range + from);

const delay = time => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
};

(async () => {
  console.log("Start scraping");
  let outside = "";
  try {
    const token =
      "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
    // const url = `https://graph.facebook.com/v1.0/me/friends?fields=id,subscribers,work,name,link,gender,hometown,birthday,education,location,religion&access_token=${token}&limit=65`;
    const url = `https://graph.facebook.com/v1.0/me/friends?fields=id,subscribers,name,link,gender,birthday,religion&access_token=${token}&limit=65`;
    let data = await axios.get(url);

    do {
      let backup = null;
      if (data.data.data.length !== 0) {
        const scrapingFriend = data.data.data;
        scrapingFriend.forEach(async p => {
          try {
            let friends = {};

            const dumpBirthday = p.birthday && p.birthday.split("/");
            const setBirthday = bd => {
              if (bd) {
                if (bd.length === 1) {
                  return new Date(bd[0], 12, 31);
                } else if (bd.length === 3) {
                  return new Date(bd[2], bd[1 - 1], bd[0]);
                } else if (bd.length === 2) {
                  return new Date(1970, bd[1 - 1], bd[0]);
                }
              }
            };
            friends.uid = p.id;
            friends.name = p.name;
            friends.facebook_id = p.link.includes("id=")
              ? p.link.split("=")[1]
              : p.link.split("facebook.com/")[1];
            friends.gender = p.gender;
            friends.subscribers = p.subscribers.summary.total_count;
            friends.birthday = setBirthday(dumpBirthday);
            friends.religion = p.religion;
            friends.created_at = new Date();

            // friends.is_rank_first = false;
            // friends.location_now = p.location && p.location.name;
            // friends.location_from = p.hometown && p.hometown.name;
            // friends.other = [];
            // p.education &&
            //   p.education.forEach(e => {
            //     friends.other.push(e.school.name);
            //   });
            // p.work &&
            //   p.work.forEach(e => {
            //     friends.other.push(e.employer.name);
            //   });

            const scrapedFriendA = await pg("friends")
              .where({ uid: friends.uid })
              .select("uid");
            const scrapedFriend = scrapedFriendA[0];

            if (!scrapedFriend) {
              // newP = newP + 1;
              await pg("friends").insert({
                uid: friends.uid,
                ...friends
              });
            } else {
              // oldP = oldP + 1;
              await pg("friends")
                .where({ uid: scrapedFriend.uid })
                .update({
                  last_post: friends.last_post,
                  subscribers: friends.subscribers
                });
            }
          } catch (err) {
            console.log(err);
          }
        });

        const next = async () => {
          try {
            backup = data.data.paging.cursors.before;
            data = await axios.get(
              `${url}&after=${data.data.paging.cursors.after}`
            );
          } catch (err) {
            console.log(`backkkkkkkkkkkkkkkkkkkkk: ${backup.slice(-5)}`);
            data = await axios.get(`${url}&before=${backup}`);
          }
        };
        if (data.data.paging.next) {
          await next();
        } else {
          data.data.paging = null;
        }
      } else {
        break;
      }
    } while (data.data.paging);
  } catch (er) {
    console.log(er);
  }
})();
