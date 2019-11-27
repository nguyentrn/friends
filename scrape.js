const axios = require("axios");
const knex = require("knex");

const pg = knex({
  client: "pg",
  connection: {
    host: "157.245.196.34",
    user: "nguyen",
    password: "Nt01113699",
    database: "cdvnu",
  },
});

// const mongoose = require("mongoose");
// const Profile = require("./model/profile");

// const DB =
//   "mongodb://nguyen:Nt01113699@157.245.196.34:27017/cdvnu?authSource=admin&w=1";

// // const DB = DB;
// // "mongodb://nguyen:Nt01113699@157.245.196.34/cdvnu?retryWrites=true&w=majority";

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log("DB connect successful !");
//   });

const random = (from, range) => Math.floor(Math.random() * range + from);

const delay = time => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
};

(async () => {
  let outside = "";
  for (let i = 0; i < 100000; i++) {
    try {
      const vnu = [
        "Khoa Y - Đại học Quốc gia TP.HCM",
        "Đại học Bách Khoa - Đại học Quốc gia TP.HCM",
        "Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM",
        "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia TP.HCM",
        "Đại học Kinh tế - Luật - Đại học Quốc gia TP.HCM",
        "Đại học Quốc tế - Đại học Quốc gia TP.HCM",
        "Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM",
      ];

      const hcmtu = [
        "Đại học Công nghệ Sài Gòn",
        "Đại học Công nghệ TP.HCM",
        "Đại học Kinh tế Tài chính TP.HCM",
        "Đại học Hoa Sen",
        "Đại học Ngoại ngữ - Tin học TP.HCM",
        "Đại học Nguyễn Tất Thành",
        "Đại học Quốc tế Hồng Bàng",
        "Đại học Văn Hiến",
        "Đại học Văn Lang",
      ];

      const hcmcong = [
        "Đại học Y Dược TP.HCM",
        "Đại học Y khoa Phạm Ngọc Thạch",
        "Đại học Văn hóa TP.HCM",
        "Đại học Tài nguyên và Môi trường TP.HCM",
        "Đại học Tài chính - Marketing",
        "Đại học Tôn Đức Thắng",
        "Đại học Sư phạm Kỹ thuật TP.HCM",
        "Đại học Sư phạm TP.HCM",
        "Đại học Nông Lâm TP.HCM",
        "Đại học Ngân hàng TP. HCM",
        "Đại học Sài Gòn",
        "Đại học Mỹ thuật TP.HCM",
        "Đại học Mở TP. HCM",
        "Đại học Luật TP.HCM",
        "Đại học Kinh tế TP.HCM",
        "Đại học Kiến trúc TP.HCM",
        "Đại học Giao thông vận tải TP.HCM",
        "Đại học Công nghiệp Thực phẩm TP.HCM",
        "Đại học Công nghiệp TP.HCM",
        "Học viện Hàng không Việt Nam",
      ];
      //
      const links = await pg
        .select("uid", "full_name", "birthday", "university", "followers")
        .from("profiles")
        .whereNull("is_scraped_friends")
        .where("birthday", ">", new Date(1999, 0, 1))
        .whereIn("university", [...vnu, ...hcmtu, ...hcmcong])
        .orderBy("followers", "desc")
        .limit(1);

      for (let i = 0; i < 20; i++) {
        await delay(random(100, 300));
        const token =
          "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
        const p = links[i];
        const uid = p.uid;
        outside = uid;
        const url = `https://graph.facebook.com/v1.0/${uid}/friends?fields=id,subscribers,work,name,link,gender,hometown,birthday,education,location,religion&access_token=${token}&limit=65`;
        console.log(
          `${p.uid}, ${p.full_name}, ${p.followers}, ${p.university}`
        );
        let data = await axios.get(url);
        let oldP = 0;
        let newP = 0;
        do {
          if (data.data.data.length !== 0) {
            const scrapingProfile = data.data.data;
            scrapingProfile.forEach(async p => {
              try {
                let profile = {};
                let profile_raws = {};

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
                profile.uid = p.id;
                profile.full_name = p.name;
                profile.facebook_id = p.link.includes("id=")
                  ? p.link.split("=")[1]
                  : p.link.split("facebook.com/")[1];
                profile.is_male = p.gender === "female" ? false : true;
                profile.followers = p.subscribers.summary.total_count;
                profile.birthday = setBirthday(dumpBirthday);
                profile.religion = p.religion;
                profile.is_rank_first = false;
                profile.created_at = new Date();

                profile_raws.location_now = p.location && p.location.name;
                profile_raws.location_from = p.hometown && p.hometown.name;
                profile_raws.other = [];
                p.education &&
                  p.education.forEach(e => {
                    profile_raws.other.push(e.school.name);
                  });
                p.work &&
                  p.work.forEach(e => {
                    profile_raws.other.push(e.employer.name);
                  });

                const scrapedProfileA = await pg("profiles")
                  .where({ uid: profile.uid })
                  .select("uid");
                const scrapedProfile = scrapedProfileA[0];

                if (!scrapedProfile) {
                  newP = newP + 1;
                  await pg("profiles").insert({
                    ...profile,
                  });
                  await pg("profile_raws").insert({
                    uid: profile.uid,
                    ...profile_raws,
                  });
                  // console.log("Created ", profile.full_name);
                } else {
                  oldP = oldP + 1;
                  const updatedProfile = await pg("profiles")
                    .where({ uid: scrapedProfile.uid })
                    .update({
                      facebook_id: profile.facebookId,
                      birthday: profile.birthday,
                      religion: profile.religion,
                      is_male: profile.gender,
                      followers: profile.followers,
                      updated_at: new Date(),
                    });
                  await pg("profile_raws")
                    .where({ uid: scrapedProfile.uid })
                    .update({
                      location_now: profile_raws.location_now,
                      location_from: profile_raws.location_from,
                      other: profile_raws.other,
                    });
                  // console.log("Updated ", profile.full_name);
                }
              } catch (err) {
                console.log(err);
              }
            });
            await delay(random(100, 300));
            const next = async () => {
              try {
                backup = data.data.paging.cursors.before;
                data = await axios.get(
                  `${url}&after=${data.data.paging.cursors.after}`
                );
                // console.log(
                //   `next: ${data.data.paging.cursors.after.slice(-5)}`
                // );
              } catch (err) {
                console.log(`backkkkkkkkkkkkkkkkkkkkk: ${backup.slice(-5)}`);
                data = await axios.get(`${url}&before=${backup}`);
              }
            };
            await next();
          } else {
            break;
          }
        } while (data.data.paging.next);

        if (data.data.data.length > 1) {
          await pg("profiles")
            .where({ uid })
            .update({ is_scraped_friends: "ScrapedFriends" });
          console.log("scraped friends");
        } else {
          await pg("profiles")
            .where({ uid })
            .update({ is_scraped_friends: "Scraped" });
          console.log("no friends");
        }
        console.log(
          `---NewProfile: ${newP}---Friends: ${oldP}---${(oldP /
            (newP + oldP)) *
            100}%`
        );
      }
    } catch (err) {
      console.log("Restart", err);

      console.log("Restart", outside);
      if (
        err.response &&
        (err.response.data.error.message.includes(
          "Unsupported get request. Object with ID"
        ) ||
          err.response.data.error.message.includes(
            "Người dùng này không có trang cá nhân nào."
          ))
      ) {
        console.log(err.response.data.error.message);
        await pg("profiles")
          .where({ uid })
          .update({ is_scraped_friends: "out" });
      }
    }
  }
})();
