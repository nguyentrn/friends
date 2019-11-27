const knex = require("knex");

const pg = knex({
  client: "pg",
  connection: {
    host: "157.245.196.34",
    user: "nguyen",
    password: "Nt01113699",
    database: "cdvnu",
  },
});
module.exports = pg;
// const mongoose = require("mongoose");
// const Profile = require("./model/profile");

// const DB =
//   "mongodb://nguyen:Nt01113699@157.245.196.34:27017/cdvnu?authSource=admin&w=1";

// // const DB = DB;
// // "mongodb://nguyen:Nt01113699@157.245.196.34/cdvnu?retryWrites=true&w=majority";

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log("DB connect successful !");
//   });
