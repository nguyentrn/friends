//
//
//
//
//
//
const pg = require("./database");

(async () => {
  const a = await pg("photos")
    .count("*")
    // .select(["full_name", "uid"])
    .where("height", "<", 500)
    .del();
  // .limit(10);

  console.log(a);
})();
