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
      const a = await pg.raw(
        `WITH return AS (SELECT uid, full_name, university FROM profiles WHERE university='Trung cấp Bách khoa Sài Gòn' LIMIT 10000) UPDATE profiles SET university=NULL FROM return WHERE profiles.uid=return.uid`
      );
      console.log("start", i);
    }
    console.log("DONEEEEE---------------------", "university");
  } catch (err) {
    console.log(err);
    console.log(err.code);
  }
};

formatUni();
