const express = require("express");
const Post = require("./models/Post");
const app = express();
const path = require("path");
const multer = require("multer");
const User = require("./models/User");
require("./conn/conn");
const cors = require("cors");
const auth = require("./routes/auth");
const post = require("./routes/posts");
const category = require("./routes/category.js");

app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/post", post);
app.use("/api/cat", category);

app.get("/search", async (req, res) => {
  const cat = req.query.cat;
  try {
    const data = await Post.find({ categories: cat });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

//upload Image

app.use("/images", express.static(path.join(__dirname, "public/images")));
//MULTER

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const post = await User.findByIdAndUpdate(req.body.id, {
      profile: req.file.filename,
    });
    await post.save();
    return res.status(200).json("FILE UPLOADED");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
app.listen(1000, () => {
  console.log("Server Started At Port 1000");
});
