//
//
//
//
//
//
const axios = require("axios");
const cheerio = require("cheerio");
const pg = require("./database");
const delay = time => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
};

(async () => {
  try {
    for (let j = 9000000; j < 9999900; j += 400) {
      // console.log("---------", j);
      for (let i = j; i < j + 400; i++) {
        (async () => {
          // console.log(i);
          const phone_number = `090${i}`;
          const headers = {
            Cookie: "PHPSESSID=lg9db9ddt4hq0pd9sm7i0oisg1;"
          };
          const a = await axios(
            `https://quetsodienthoai.com/search-phone/?phone=${phone_number}`,
            { headers }
          );
          //   fb-icon
          const $ = cheerio.load(a.data);
          const res = $(".fb-icon").attr("src");
          const uid = res ? res.split("/")[3] : null;
          // console.log(res);
          // console.log(phone_number);
          if (uid) {
            const scrapedProfileA = await pg("profiles")
              .where({ uid })
              .select("*");
            const scrapedProfile = scrapedProfileA[0];

            if (!scrapedProfile) {
              console.log("created", phone_number);
              await pg("profiles").insert({
                uid,
                facebook_id: uid,
                full_name: "_No_Name_",
                phone_number
              });
            } else {
              console.log("update ", scrapedProfile.full_name, phone_number);

              await pg("profiles")
                .where({ uid })
                .update({
                  phone_number
                });
            }
          }
        })();
      }
      await delay(10000);
    }
  } catch (err) {
    console.log(err);
  }
})();
