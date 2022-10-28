const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    categories: {
      type: mongoose.Types.ObjectId,
      ref: "category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
