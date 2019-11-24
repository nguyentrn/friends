const mongoose = require("mongoose");

const confessionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Vui lòng nhập nội dung"]
    },
    category: {
      type: String,
      enum: ["Tìm bạn", "Hỏi đáp", "Thú tội", "Tâm sự"],
      default: "Tâm sự"
    },
    owner: String,
    likes: String,
    comment: String
  },
  { timestamps: true }
);

const Confession = mongoose.model("Confession", confessionSchema);
module.exports = Confession;
