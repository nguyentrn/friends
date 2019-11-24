const mongoose = require("mongoose");
const groupPostSchema = new mongoose.Schema(
  {
    owner: String,
    link: { type: String, unique: true },
    content: String,
    birthday: Number,
    isScraped: Boolean
  },
  { timestamps: true }
);

const GroupPost = mongoose.model("GroupPost", groupPostSchema);
module.exports = GroupPost;
