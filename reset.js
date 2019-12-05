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

// (async () => {
//   for (let i = 0; i < 4000000; i++) {
//     try {
//       const links = await pg("profiles")
//         .select([
//           "id",
//           "uid",
//           "followers",
//           "reactions",
//           "point",
//           "photos.created_at",
//           "reactions"
//         ])
//         .innerJoin("photos", "profiles.uid", "photos.owner_id")
//         .whereNotNull("reactions")
//         .whereNull("point")
//         .limit(300);
//       for (let i = 0; i < links.length; i++) {
//         (async () => {
//           const p = links[i];
//           const reactions = p.reactions;
//           // console.log(p.reactions);
//           const now = Math.sqrt(
//             Math.sqrt((Date.now() - p.created_at) / 17280000000)
//           );
//           const point = Math.floor(
//             (p.reactions *
//               Math.sqrt(Math.sqrt(Math.sqrt(p.reactions))) *
//               1000) /
//               ((p.followers + 5000) * now)
//           );
//           console.log(reactions, point);
//           await pg("photos")
//             .update({ reactions, point })
//             .where({ id: p.id });
//         })();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// })();

(async () => {
  const a = await pg("photos")
    .count("*")
    .where("height", ">", 1400);
  console.log(a);
})();
