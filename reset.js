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
    const a = await pg("profiles")
      .update("is_rank_first", false)
      .where("is_rank_first", true);
    console.log(a);
  } catch (err) {
    console.log(err);
    console.log(err.code);
  }
};

formatUni();
