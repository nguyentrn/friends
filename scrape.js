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
  for (let i = 0; i < 100000; i++) {
    try {
      const vnu = [
        "Khoa Y - Đại học Quốc gia TP.HCM",
        "Đại học Bách Khoa - Đại học Quốc gia TP.HCM",
        "Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM",
        "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia TP.HCM",
        "Đại học Kinh tế - Luật - Đại học Quốc gia TP.HCM",
        "Đại học Quốc tế - Đại học Quốc gia TP.HCM",
        "Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM"
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
        "Đại học Văn Lang"
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
        "Học viện Hàng không Việt Nam"
      ];

      //
      const links = await pg
        .select("uid", "full_name", "birthday", "university", "followers")
        .from("profiles")
        .whereNotNull("university")
        .whereNull("is_scraped_friends")
        // .where("birthday", ">", new Date(1998, 0, 1))
        //.whereIn("university", [...vnu, ...hcmtu, ...hcmcong])
        .orderBy("followers", "desc")
        .limit(100);
      console.log("total", links.length);
      for (let i = 0; i < links.length; i++) {
        const token =
          "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
        const p = links[i];
        const uid = p.uid;
        outside = uid;
        const url = `https://graph.facebook.com/v1.0/${uid}/friends?fields=id,subscribers,work,name,link,gender,hometown,birthday,education,location&access_token=${token}&limit=80`;
        let data = await axios.get(url);
        let oldP = 0;
        let newP = 0;
        do {
          let backup = null;
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
                    ...profile
                  });
                  await pg("profile_raws").insert({
                    uid: profile.uid,
                    ...profile_raws
                  });
                  // console.log("Created ", profile.full_name);
                } else {
                  oldP = oldP + 1;
                  const updatedProfile = await pg("profiles")
                    .where({ uid: scrapedProfile.uid })
                    .update({
                      facebook_id: profile.facebookId,
                      birthday: profile.birthday,
                      is_male: profile.gender,
                      followers: profile.followers,
                      updated_at: new Date()
                    });
                  await pg("profile_raws")
                    .where({ uid: scrapedProfile.uid })
                    .update({
                      location_now: profile_raws.location_now,
                      location_from: profile_raws.location_from,
                      other: profile_raws.other
                    });
                  // console.log("Updated ", profile.full_name);
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
              console.log(`${p.full_name}, ${p.followers}, ${p.university}`);

              data.data.paging = null;
            }
          } else {
            break;
          }
        } while (data.data.paging);

        if (data.data.data.length > 1) {
          await pg("profiles")
            .where({ uid })
            .update({ is_scraped_friends: "ScrapedFriends" });
        } else {
          await pg("profiles")
            .where({ uid })
            .update({ is_scraped_friends: "Scraped" });
          // console.log("no friends");
        }
        if (oldP > 0) {
          console.log(
            `-----${newP}/${oldP + newP}---${Math.floor(
              (newP / (newP + oldP)) * 100
            )}%`
          );
        }
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
          .where({ uid: outside })
          .update({ is_scraped_friends: "out" });
      }
    }
  }
})();
