//
//
//
//
//
//
const axios = require("axios");
const cheerio = require("cheerio");
const pg = require("./database");

// for (let i = 1000000; i < 9999999; i++) {
for (let i = 9999900; i < 9999999; i++) {
  const phone_number = `039${i}`;
  (async () => {
    const headers = {
      Cookie: "PHPSESSID=bbvs1dkkjcj77dtoakc1q85uv2;"
    };
    const a = await axios(
      `https://quetsodienthoai.com/search-phone/?phone=${phone_number}`,
      { headers }
    );
    //   fb-icon
    const $ = cheerio.load(a.data);
    const res = $(".fb-icon").attr("src");
    const uid = res ? res.split("/")[3] : null;
    // console.log(uid);
    // console.log(phone_number);
    if (uid) {
      const scrapedProfileA = await pg("profiles")
        .where({ uid })
        .select("*");
      const scrapedProfile = scrapedProfileA[0];

      if (!scrapedProfile) {
        console.log("created");
        await pg("profiles").insert({
          uid,
          facebook_id: uid,
          full_name: "_No_Name_",
          phone_number
        });
      } else {
        console.log("update ", scrapedProfile.full_name);

        await pg("profiles")
          .where({ uid })
          .update({
            phone_number
          });
      }
    }
  })();
}
