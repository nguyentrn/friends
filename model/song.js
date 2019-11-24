const mongoose = require("mongoose");
const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Must have title"]
    },
    artist: [String],
    duration: Number,
    url: {
      type: String,
      unique: [true, "Must unique"]
    },
    src: Array,
    lyric: [String],
    downloads: Number,
    views: Number,
    country: String,
    genre: String,
    albumYear: Number,
    lastDownloadAt: String,
    isScraped: {
      type: Boolean,
      default: false
    },
    point: Number,
    scrapedSrc: { type: Boolean, default: false },
    scrapedLyric: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
