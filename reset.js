//
//
//
//
//
//
const pg = require("./database");

// const formatUni = async function() {
//   try {
//     console.log("start", "university");
//     const a = await pg("profiles")
//       .update("university", null)
//       .whereIn("university", [
//         "Đại học Bangkok",
//         "Đại học Quốc gia Lào",
//         "Đại học Queensland",
//         "Đại học Assumption",
//         "Đại học Silpakorn",
//         "Đại học La Trobe",
//         "Đại học Công nghệ King Mongkut North Bangkok",
//         "Đại học Công nghệ Rajamangala Thanyaburi",
//         "Đại học Macquarie",
//         "Đại học Chiang Mai",
//         "Đại học Chulalongkorn",
//         "Đại học Khoa học Sức khỏe Lào",
//         "Đại học Mahidol",
//         "Đại học Naresuan",
//         "Đại học Srinakharinwirot",
//         "Đại học Savannakhet",
//         "Cao đẳng Lào - Mỹ"
//       ]);
//     console.log(a);
//   } catch (err) {
//     console.log(err);
//     console.log(err.code);
//   }
// };

// const formatUni = async function() {
//   try {
//     console.log("start", "university");
//     const a = await pg("profiles")
//       .update("is_photo_scraped", null)
//       .whereNotNull("is_photo_scraped");
//     console.log(a);
//   } catch (err) {
//     console.log(err);
//     console.log(err.code);
//   }
// };

// const formatUni = async function() {
//   try {
//     console.log("start", "university");
//     const a = await pg("photos")
//       .update("point", null)
//       .whereNotNull("point");
//     console.log(a);
//   } catch (err) {
//     console.log(err);
//     console.log(err.code);
//   }
// };
// formatUni();

const formatUni = async function() {
  try {
    // let length = 0;
    // for (let i = 0; i < 1000; i++) {
    console.log("start", "university");
    const profile = await pg("profiles")
      .select([
        "id",
        "uid",
        "followers",
        "reactions",
        "point",
        "photos.created_at"
      ])
      .innerJoin("photos", "profiles.uid", "photos.owner_id")
      .whereNull("point")
      .whereNotNull("reactions")
      .limit(1500);
    length = profile.length;
    console.log(profile.length);
    for (let i = 0; i < profile.length; i++) {
      const p = profile[i];

      // profile.forEach(async p => {
      const now = Math.sqrt(
        Math.sqrt((Date.now() - p.created_at) / 17280000000)
      );
      const point = Math.floor(
        (p.reactions * Math.sqrt(p.reactions) * 1000) /
          ((p.followers + 5000) * now)
      );
      // console.log(point, p);
      const a = await pg("photos")
        // .select("*")
        .where("id", p.id)
        .update("point", point);
      //   // console.log(a);
      // });
    }
    console.log("done");
  } catch (err) {
    console.log(err.response);
    console.log(err);
  }
};
(async () => {
  for (let i = 0; i < 25; i++) {
    await formatUni();
  }
})();
