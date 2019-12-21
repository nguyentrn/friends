//
//
//
//
//
//
const pg = require("./database");
///////////////////////////// counttttttttt
(async () => {
  const a = await pg("photos")
    .count("*")
    // .select(["full_name", "uid"])
    .where("height", "<", 900)
    // .del();
  // .limit(10);

  console.log(a);
})();

/// delete point
// (async () => {
//   const a = await pg("photos")
//     // .count("*")
//     // .select(["full_name", "uid"])
//     .whereNotNull("point")
//     .update("point", null);
//   // .limit(10);

//   console.log(a);
// })();

//////
//
//
//
//
//
// (async () => {
//   const a = await pg("profiles")
//     .update("is_vnuer", true)
//     // .select(["full_name", "uid"])
//     .whereIn("university", [
//       "Đại học Bách khoa - Đại học Quốc gia TP.HCM",
//       "Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM",
//       "Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia TP.HCM",
//       "Đại học Quốc tế - Đại học Quốc gia TP.HCM",
//       "Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM",
//       "Đại học Kinh tế - Luật - Đại học Quốc gia TP.HCM",
//       "Đại học An Giang - Đại học Quốc gia TP.HCM",
//       "Khoa Y - Đại học Quốc gia TP.HCM"
//     ]);
//   // .del();
//   // .limit(10);

//   console.log(a);
// })();
