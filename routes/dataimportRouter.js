import express from "express";
import mongoose from "mongoose";
import Hotel from "../model/hotelModel.js";
import Hotels from "../data/hotels.js";

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Hotel.deleteMany({});
    const hotelinDB = await Hotel.insertMany(Hotels.data);
    res.json(hotelinDB);
  } catch (error) {
    console.error("Couldn't add data to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
