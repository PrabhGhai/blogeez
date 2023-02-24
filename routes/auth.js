const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//signin
router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({ username, email, password: hashPassword });
    await user
      .save()
      .then(() => res.status(200).json({ message: "SignUp Successfully" }));
  } catch (error) {
    res.status(400).json({ message: "User exists already." });
    console.log(error);
  }
});

//login
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "Please Sign Up First" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

//UPDATE IMAGE
router.put("/upload/:id", async (req, res) => {
  const { profile } = req.body;
  console.log(profile);
  const update = await User.findByIdAndUpdate(req.params.id, { profile });
  await update
    .save()
    .then(() =>
      res.status(200).json({ message: "Image Updated Successfully" })
    );
});

//UPDATE username
router.put("/updateUsername/:id", async (req, res) => {
  const { username } = req.body;
  const update = await User.findByIdAndUpdate(req.params.id, { username });
  await update
    .save()
    .then(() => res.status(200).json({ message: "Updated Successfully" }));
});

//UPDATE PASSWORD

router.put("/updatePassword/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) {
    res.status(200).json({ message: "Current password is incorrect" });
  } else {
    const { newpassword } = req.body;
    const hashPassword = bcrypt.hashSync(newpassword);
    const update = await User.findByIdAndUpdate(req.params.id, {
      password: hashPassword,
    });
    await update
      .save()
      .then(() => res.status(200).json({ message: "Updated Successfully" }));
  }
});

module.exports = router;
