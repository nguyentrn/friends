const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema(
  {
    title: String,
    link: { type: String, unique: true },
    comments: Number,
    reviews: Number,
    releaseDate: Date,

    label: String,
    isScrape: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// filmSchema.pre("save", function() {
//   this.dpd =
//     Math.pow(this.downloads, 2) / ((this.createdAt - this.date) / 86400);
// });

const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
