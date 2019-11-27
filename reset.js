//
//
//
//
//
//
const pg = require("./database");

const formatUni = async function() {
  try {
    console.log("start", "university");

    for (let i = 0; i < 100000; i++) {
      const a = await pg("profiles")
        .where({ university: "Trung cấp Bách khoa Sài Gòn" })
        .limit(1000)
        .offset(i)
        .update({ university: null });
      console.log("start", i);
    }
    console.log("DONEEEEE---------------------", "university");
  } catch (err) {
    console.log(err);
    console.log(err.code);
  }
};

formatUni();
