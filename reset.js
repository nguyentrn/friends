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
    do {
      console.log("start", "university");
      const profile = await pg("profiles")
        .select(["id", "uid", "followers", "reactions", "point"])
        .innerJoin("photos", "profiles.uid", "photos.owner_id")
        .whereNull("point")
        .whereNotNull("reactions")
        .limit(1000);

      console.log(profile.length);
      profile.forEach(async p => {
        const point = p.reactions / (p.followers + 5000);
        // console.log(point);
        // console.log(p);
        const a = await pg("photos")
          // .select("*")
          .where("id", p.id)
          .update("point", Math.floor(point * 10000));
        console.log(a);
      });
    } while (profile.length > 0);
  } catch (err) {
    console.log(err.response);
    console.log(err.code);
  }
};

formatUni();
