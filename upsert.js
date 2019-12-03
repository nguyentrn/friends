const pg = require("./database");

//
///
//
//
//
//
//

const upsert = async (tableName, primaryKey, insertValues) => {
  try {
    const key = Object.keys(primaryKey);
    const isExists = await pg(tableName)
      .where(primaryKey)
      .select(key);
    const exists = isExists[0];
    if (!exists) {
      await pg(tableName).insert(insertValues);
    }
  } catch (err) {
    if (err.error && err.error.routine === "_bt_check_unique") {
      console.log("_bt_check_unique");
    }
  }
};

module.exports = upsert;
