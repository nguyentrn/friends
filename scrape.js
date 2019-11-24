const axios = require("axios");
const mongoose = require("mongoose");
const Profile = require("./model/profile");

const DB =
  "mongodb://nguyen:Nt01113699@157.245.196.34:27017/cdvnu?authSource=admin&w=1";

// const DB = DB;
// "mongodb://nguyen:Nt01113699@157.245.196.34/cdvnu?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connect successful !");
  });

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
      // const res = await axios(
      //   "http://localhost:8000/api/v1/profile/thong-ke-truong"
      // );
      // const hotUni = [];
      // for (let i = 0; i < 15; i++) {
      //   hotUni.push(res.data.data[i]._id);
      // }
      // const hot = { $in: hotUni };
      // console.log(hot);
      //6636b10101b3a24e047c1da088603b8d55c95cf0f5448b17432509f6cdaf8485
      const links = await Profile.find({
        // isVnuer: true,
        university: { $in: [...vnu, ...hcmcong, ...hcmtu] },
        // other: { $regex: /chuyên hùng vương/i },
        // from: "Gia Lai",
        birthday: { $gte: new Date(1999, 0, 1) },
        isScrapedFriends: null,
        updatedScrape: { $ne: null }
      })
        .sort("-followers")
        .select("uid name university followers");
      // .limit(100);
      console.log(links.length);
      for (let i = 0; i < 20; i++) {
        await delay(random(100, 300));
        const token =
          // "EAAAAZAw4FxQIBAOaFnPyAdOGSa7nO2cAeOzINFfXMtaWhNmsfs6FJ1sjufazMECwL0dobvMl2zOL4fAIXjMZCgjnW9pwCLHjqvz5UMgBwm2lG3BUk35hYfwfpTnmJxr3p9ZCouhwawqJW3CZBA6sn6sjukQoLomhorgZByoqZAZBgZDZD";
          "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
        const uid = links[i].uid;
        outside = uid;
        console.log(
          `Scrape ${uid}, ${links[i].name}, ${links[i].followers} followers, student of ${links[i].university}  `
        );
        const url = `https://graph.facebook.com/v1.0/${uid}/friends?fields=id,subscribers,work,name,link,gender,hometown,birthday,education,location,religion&access_token=${token}&limit=65`;

        let data = await axios.get(url);
        let oldP = 0;
        let newP = 0;
        do {
          if (data.data.data.length !== 0) {
            const scrapingProfile = data.data.data;
            scrapingProfile.forEach(async p => {
              try {
                let profile = {};
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
                profile.name = p.name;
                profile.facebookId = p.link.includes("id=")
                  ? p.link.split("=")[1]
                  : p.link.split("facebook.com/")[1];
                profile.gender = p.gender === "female" ? "Nữ" : "Nam";
                profile.followers = p.subscribers.summary.total_count;
                profile.birthday = setBirthday(dumpBirthday);
                profile.religion = p.religion;
                profile.location = p.location && p.location.name;
                profile.locationFrom = p.hometown && p.hometown.name;
                profile.other = [];
                profile.rankLast = true;
                p.education &&
                  p.education.forEach(e => {
                    profile.other.push(e.school.name);
                  });
                p.work &&
                  p.work.forEach(e => {
                    profile.other.push(e.employer.name);
                  });
                // console.log(profile);

                const scrapedProfile = await Profile.findOne({
                  uid: profile.uid
                });

                if (!scrapedProfile) {
                  newP = newP + 1;
                  const newProfile = await Profile.create({
                    ...profile,
                    scrapingUser: "caotrido1120@gmail.com"

                    // scrapingUser: "caotrido1120@gmail.com"
                  });
                  // console.log("Created ", newProfile.name);
                } else {
                  oldP = oldP + 1;
                  const updatedProfile = await Profile.findByIdAndUpdate(
                    scrapedProfile._id,
                    {
                      facebookId: profile.facebookId,
                      birthday: profile.birthday,
                      location: profile.location,
                      locationFrom: profile.locationFrom,
                      religion: profile.religion,
                      gender: profile.gender,
                      other: profile.other,
                      followers: profile.followers,
                      updatedScrape: Date.now()
                    }
                  );
                  // console.log("Updated ", updatedProfile.name);
                }
              } catch (err) {
                console.log(err.code);
              }
            });
            await delay(random(100, 300));
            const next = async () => {
              try {
                backup = data.data.paging.cursors.before;
                data = await axios.get(
                  `${url}&after=${data.data.paging.cursors.after}`
                );
                console.log(
                  `next: ${data.data.paging.cursors.after.slice(-5)}`
                );
              } catch (err) {
                console.log(`backkkkkkkkkkkkkkkkkkkkk: ${backup.slice(-5)}`);
                data = await axios.get(`${url}&before=${backup}`);
              }
            };
            // if (data.data.data.length !== 0) {
            await next();
            // } else {
            //   console.log("not found any friends");
            // }
          } else {
            break;
          }
        } while (data.data.paging.next);

        if (data.data.data.length > 1) {
          await Profile.findOneAndUpdate(
            { uid },
            { isScrapedFriends: "ScrapedFriends" }
          );
          console.log("scraped friends");
        } else {
          await Profile.findOneAndUpdate(
            { uid },
            { isScrapedFriends: "Scraped" }
          );
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
        await Profile.findOneAndUpdate(
          { uid: outside },
          { isScrapedFriends: "out" }
        );
      }
    }
  }
})();
