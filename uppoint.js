//
//
//
//
//
//
const pg = require("./database");
const fs = require("fs");

const setPoint = async () => {
  const a = await pg("profiles")
    .select(["uid", "followers", "university", "hometown"])
    .whereNotNull("university")
    .andWhere("birthday", ">", "2000-01-01")
    .andWhere("is_male", false)
    .orderBy("followers", "desc")
    .limit(1000);
  console.log(a);

  //   const res = a.map(s => s.uid);
  //   console.log(res);
  //   fs.writeFile("mynewfile3.txt", res, function(err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   });
};

(async () => {
  await setPoint();
})();
