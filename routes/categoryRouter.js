import express from "express";
import Category from "../model/category.model.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
