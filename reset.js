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
//       .select("*")
//       .where("owner_id", "100006523755513")
//       .del();
//     console.log(a);
//   } catch (err) {
//     console.log(err);
//     console.log(err.code);
//   }
// };

// formatUni();

const formatUni = async function() {
  try {
    console.log("start", "university");
    const profile = await pg("profiles")
      .distinct(["uid", "followers"])
      .innerJoin("photos", "profiles.uid", "photos.owner_id")
      .whereNotNull("photos.reactions");
    console.log(profile);
    profile.forEach(async p => {
      const a = await pg("photos")
        .select("*")
        .update({ point: pg.raw(`??/${p.followers}`, ["reactions"]) })
        .where({ owner_id: p.uid });
      console.log(a);
    });
  } catch (err) {
    console.log(err);
    console.log(err.code);
  }
};

formatUni();
