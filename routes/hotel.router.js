import express from "express";
import Hotel from "../model/hotelModel.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    hotels
      ? res.json(hotels)
      : res.status(400).json({ message: "No data found" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
