import express from "express";
import hotel from "../model/hotelModel.js";
const router = express.Router();

//http://localhost:2000/api/hotels/cnajnwqeqjjqm923r9ru

router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const hotels = await hotel.findById(id);
    res.json(hotels);
  } catch (error) {
    res.status(404).json({ message: "The Hotel with given id wasn't found" });
  }
});

export default router;
