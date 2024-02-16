import express from "express";
import Hotel from "../model/hotelModel.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  const hotelCategory = req.query.category;
  try {
    let hotels;
    if (hotelCategory) {
      hotels = await Hotel.find({ category: hotelCategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels.length
      ? res.json(hotels)
      : res.status(400).json({ message: "No data found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
