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

// (async () => {
//   const a = await pg("photos")
//     .count("*")
//     .where("height", ">", 1400);
//   console.log(a);
// })();
////////////////////////////// DELETE LOW REACTION PHOTOS
// (async () => {
//   // if (reactions < 10 && Date.now() - p.created_at * 1 > 8640000000) {
//   // console.log(url);

//   const a = await pg("photos")
//     // .select("*")
//     .where("reactions", "<", 5)
//     .whereNotNull("point")
//     // .andWhere('created_at', '>' ,8640000000)
//     .count("*");
//   // .limit(100);
//   console.log(a);
//   // .del();
//   // }
// })();

// const setPoint = async () => {
//   a = await pg("photos")
//     .select("*")
//     .whereNotNull("reactions")
//     .orderBy("point", "desc")
//     .join("profiles", "photos.owner_id", "=", "profiles.uid")
//     .limit(100);
//   // console.log(a);
//   a.map(async p => {
//     const now = Math.sqrt(Math.sqrt((Date.now() - p.created_at) / 17280000000));
//     const point = Math.floor(
//       (p.reactions * Math.sqrt(Math.sqrt(p.reactions)) * 1000) /
//         ((p.followers + 5000) * now)
//     );
//     console.log(p.point, point, p.picture);
//     // await pg("photos")
//     //   .update({ reactions, point })
//     //   .where({ id: p.id });
//   });
// };

// (async () => {
//   await setPoint();
// })();

// (async () => {
//   const a = await pg("profiles")
//     // .count("*")
//     .select(["full_name", "uid"])
//     .where("full_name", "like", "%(%");
//   // .limit(10);
//   a.map(async p => {
//     console.log(p.full_name);
//     const full_name = p.full_name.split("(")[0];
//     const alter_name = p.full_name
//       .split("(")[1]
//       .replace("(", "")
//       .replace(")", "");
//     console.log(full_name, "|", alter_name);
//     const u = await pg("profiles")
//       .update({ full_name, alter_name })
//       .where("uid", p.uid);
//     console.log(u);
//   });
//   console.log("do");
// })();

const get = async () => {
  const a = await pg("photos")
    .distinct("owner_id")
    .whereNotNull("photos.point")
    .join("profiles", "photos.owner_id", "profiles.uid");
  // .whereNull("profiles.point");
  // .limit(100);
  // console.log(a);
  // a.map(async p => {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    const p = a[i];
    const pt = await pg("photos")
      .select(["point", "picture"])
      .andWhere("point", ">", 0)
      .andWhere("height", ">", 2000)
      .andWhere("owner_id", p.owner_id)
      .orderBy("point", "desc")
      .limit(10);

    if (pt.length) {
      let sum = 0;
      for (let i = 0; i < pt.length; i++) {
        sum += pt[i].point * 10;
      }
      const avg = sum / 10;
      const point = parseInt(avg);
      const avatar = pt[0].picture;
      // console.log(point);
      const ud = await pg("profiles")
        // .select("*")
        .update({ point, avatar })
        .where("uid", p.owner_id);
      total += 1;
      console.log(i, pt.length, sum, avg, point);
    }
  }
  console.log(total);
  // })
};
(async () => {
  await get();

  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }
})();
