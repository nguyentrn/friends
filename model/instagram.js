const mongoose = require("mongoose");

const instagramSchema = new mongoose.Schema(
  {
    instaId: {
      type: Number,
      required: [true, "Must have id"],
      unique: true
    },
    instaName: {
      type: String,
      required: [true, "Must have name"],
      unique: true
    },
    name: String,
    description: String,
    medias: {
      type: Number,
      required: true,
      default: 0
    },
    followers: {
      type: Number,
      required: true,
      default: 0
    },
    followings: {
      type: Number,
      required: true,
      default: 0
    },
    avgEngagements: {
      type: Number,
      required: true,
      default: 0
    },
    engagementsRates: {
      type: Number,
      required: true,
      default: 0
    },
    avgLikes: {
      type: Number,
      required: true,
      default: 0
    },
    likesRates: {
      type: Number,
      required: true,
      default: 0
    },
    avgComments: {
      type: Number,
      required: true,
      default: 0
    },
    commentsRates: {
      type: Number,
      required: true,
      default: 0
    },
    isScrapedFriends: {
      type: Boolean,
      required: true,
      default: false
    },

    isScraped: {
      type: Boolean,
      required: true,
      default: false
    },
    photos: [{ id: String, url: String }]
  },
  { timestamps: true }
);

const Instagram = mongoose.model("Instagram", instagramSchema);
module.exports = Instagram;
