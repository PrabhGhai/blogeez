const mongoose = require("mongoose");
const conn = async (req, res, next) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://admin1:12345tcm@cluster0.qleakdg.mongodb.net/blog?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    res.starus(400).json({ message: "not connected" });
    console.log(error);
  }
};

conn();
