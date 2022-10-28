const Category = require("../models/Category");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const cat = new Category({ name });
    await cat
      .save()
      .then(() => res.status(200).json({ message: "Category added" }));
  } catch (error) {
    console.log(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories: categories });
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const categories = await Category.findById(req.params.id).populate("blogs");
    res.status(200).json({ categories: categories });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
