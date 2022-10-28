const Post = require("../models/Post");
const router = require("express").Router();
const User = require("../models/User");
const Categories = require("../models/Category");
//create post
router.post("/", async (req, res, next) => {
  const post = new Post(req.body);
  let user = req.body.username;
  let cat = req.body.categories;
  if (cat.length === 0) {
    console.log("Please add category");
  } else {
    let existinguser = await User.findById(user);
    let findCat = await Categories.findById(cat);
    if (existinguser) {
      existinguser.blogs.push(post);
      findCat.blogs.push(post);
      await existinguser.save();
      await findCat.save();
      post.save().then(() => {
        res.status(200).json(post);
      });
    } else {
      res.status(400).json({ message: "User does not exist " });
    }
  }
});
//update
router.put("/:id", async (req, res, next) => {
  const { title, description, photo } = req.body;
  const post = await Post.findByIdAndUpdate(req.params.id, {
    title,
    description,
    photo,
  });
  await post.save().then(() => {
    res.status(200).json({ message: "Updated Successfully" });
  });
});

//delete post
router.delete("/:id", async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id).then(() => {
    res.json("post deleted successfully");
  });
});

//getbyid
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//getAll
router.get("/", async (req, res, next) => {
  try {
    const post = await Post.find().populate("username");
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//getpostbyuserid

router.get("/user/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const userBlogs = await User.findById(id)
      .sort({ createdAt: -1 })
      .populate("blogs");

    res.status(200).json({ user: userBlogs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
