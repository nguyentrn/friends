const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    facebookId: {
      type: String,
      required: [true, "Must have facebookId"],
      unique: true
    },
    name: String,
    uid: {
      type: String,
      unique: true
    },
    university: String,
    from: String,
    gender: String,
    birthday: Date,
    education: String,
    location: String,
    locationFrom: String,
    work: String,
    followers: Number,
    isVnuer: {
      type: Boolean,
      required: [true, "is vnuer?"],
      default: false
    },
    phone: String,
    rankLast: Boolean,
    alternateName: String,
    scrapingUser: String,
    mutualFriendsWithSrapingUser: Number,
    isFriendWithSrapingUser: Boolean,
    workDone: String,
    isScrapedFriends: String,
    educationDone: String,
    educationBefore: String,
    joinedDate: Date,
    other: Array,
    socialNetworks: String,
    love: String,
    language: String,
    religion: String,
    isMiniScraped: {
      type: Boolean,
      required: [true, "is mini scrapedd?"],
      default: false
    },
    updatedScrape: Date
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
