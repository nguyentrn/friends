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
  for (let i = 0; i < 1; i++) {
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

      const links = await pg
        .select(
          "uid",
          "full_name",
          "birthday",
          "university",
          "followers",
          "is_photo_scraped"
        )
        .from("profiles")
        .whereNotNull("university")
        .whereNull("is_photo_scraped")
        // .whereIn("university", [...vnu])
        .andWhere("is_male", false)
        .andWhere("is_rank_first", true)
        .andWhere("birthday", ">", new Date(1998, 0, 1))
        .orderBy("followers", "desc");
      // .limit(1)
      // .offset(1);
      console.log("total", links.length);
      for (let i = 0; i < links.length; i++) {
        await delay(random(100, 300));
        const token =
          "EAAAAZAw4FxQIBAPxzIkyMfgsH54ReRCXmhokvKuRfwhpbEai7gRtWd7lALZB1wmVYgiMzSxZCHfuCPEHZAIwLn9AJEBMXl9ezvc40ZBOBB8QN8HNViVW5lVSS5HjwXUKZBCsCMUggodLZBHHDjTzbPQY553wZAzsZAnHIQWT5st3WYQZDZD";
        const p = links[i];
        const uid = p.uid;
        outside = uid;
        const url = `https://graph.facebook.com/v1.0/${uid}/posts?fields=full_picture,created_time&access_token=${token}&limit=500`;
        console.log(`${p.full_name}, ${p.followers}, ${p.university}`);
        let data = await axios.get(url);
        const scrapingProfile = data.data.data.length;
        do {
          let backup = null;
          if (data.data.paging.next) {
            const scrapingProfile = data.data.data;
            scrapingProfile.forEach(async pt => {
              try {
                const photo = {};
                photo.picture = pt.full_picture;
                if (photo.picture && !photo.picture.includes("external")) {
                  photo.owner_id = p.uid;
                  photo.id = pt.id.split("_")[1];
                  photo.created_at = pt.created_time;
                  // console.log(photo);

                  if (photo.picture) {
                    upsert("photos", { id: photo.id }, photo, {
                      created_at: photo.created_at
                    });
                  }

                  // if (data.data.data.length > 1) {
                  //   await pg("profiles")
                  //     .where({ uid })
                  //     .update({ is_photo_scraped: "ScrapedFriends" });
                  // } else {
                  //   await pg("profiles")
                  //     .where({ uid })
                  //     .update({ is_photo_scraped: "Scraped" });
                  //   // console.log("no friends");
                  // }
                }
              } catch (err) {
                console.log(err);
              }
            });
            await delay(random(100, 200));
            const next = async () => {
              try {
                backup = data.data.paging.previous;
                data = await axios.get(data.data.paging.next);
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
            console.log(`Done ${links[i].full_name}`);
            break;
          }
        } while (data.data.paging);
        const photo_scraped_date = new Date();
        const is_photo_scraped = true;
        if (scrapingProfile !== 0) {
          console.log("Add data");
          await pg("profiles")
            .where({ uid })
            .update({
              is_photo_scraped,
              photo_scraped_date
            });
        } else {
          console.log("No data");
          await pg("profiles")
            .where({ uid })
            .update({
              is_photo_scraped,
              photo_scraped_date
            });
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
        // await pg("profiles")
        //   .where({ uid: outside })
        //   .update({ is_photo_scraped: "out" });
      }
    }
  }
})();
