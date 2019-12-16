//
//
//
//
//
//
const pg = require("./database");

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

const setPoint = async () => {
  a = await pg("photos")
    .select(["reactions", "followers", "id", "photos.created_at"])
    .whereNotNull("reactions")
    .orderBy("photos.point", "desc")
    .join("profiles", "photos.owner_id", "=", "profiles.uid");
  // .limit(100);
  // console.log(a);
  // a.map(async p => {
  for (let i = 0; i < a.length; i++) {
    const p = a[i];
    const now = Math.pow(
      (p.created_at - new Date("2012-1-1")) / 100000000000,
      2
    );
    // console.log(p.created_at);
    // console.log(now);

    const point = Math.floor(
      (p.reactions *
        Math.sqrt(Math.sqrt(Math.sqrt(p.reactions))) *
        1000 *
        now) /
        (p.followers + 5000)
    );
    console.log(i, point, now);
    await pg("photos")
      .update({ point })
      .where({ id: p.id });
  }
};

(async () => {
  // for (let i = 0; i < 30; i++) {
  await setPoint();
  // }
})();

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

// const get = async () => {
//   const a = await pg("photos")
//     .distinct("owner_id")
//     .select("profiles.point")
//     .whereNotNull("photos.point")
//     .join("profiles", "photos.owner_id", "profiles.uid");
//   // .whereNull("profiles.point");
//   // .limit(200);
//   // a.map(async p => {
//   let total = 0;
//   for (let i = 0; i < a.length; i++) {
//     const p = a[i];
//     // console.log(p);
//     const pt = await pg("photos")
//       .select(["point", "picture"])
//       .andWhere("point", ">", 0)
//       .andWhere("height", ">", 2000)
//       .andWhere("owner_id", p.owner_id)
//       .orderBy("point", "desc")
//       .limit(10);

//     if (pt.length) {
//       let sum = 0;
//       for (let i = 0; i < pt.length; i++) {
//         sum += pt[i].point * 10;
//       }
//       const avg = sum / 10;
//       const point = parseInt(avg);

//       if (p.point !== point) {
//         const avatar = pt[0].picture;
//         // console.log(point);
//         const ud = await pg("profiles")
//           // .select("*")
//           .update({ point, avatar, updated_photo_at: new Date() })
//           .where("uid", p.owner_id);
//         total += 1;
//         console.log(i, pt.length, sum, avg, point);
//       } else {
//         console.log(i, "not changed");
//       }
//     } else {
//       console.log("no image");
//     }
//   }
//   console.log(total);
//   // })
// };
// (async () => {
//   await get();

//   // for (let i = 0; i < 10; i++) {
//   //   console.log(i);
//   // }
// })();
