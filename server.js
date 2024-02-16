import "dotenv/config";
import express from "express";
import hotelRouter from "./routes/hotel.router.js";
import mongoose from "mongoose";
import connectDB from "./config/dbconfig.js";
import hotelDataAddedtoDB from "./routes/dataimportRouter.js";
import categoryAddedtoDB from "./routes/categoryimportRouter.js";
import catergoryRouter from "./routes/categoryRouter.js";
import singleHotelRouter from "./routes/singleHotelRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();
const { PORT } = process.env;
connectDB();
// mongoose.connection.once("open", () => {
//   console.log("Connected to the database");
// });

app.use(express.json());
app.use("/api/hotels", hotelRouter);
app.use("/api/hoteldata", hotelDataAddedtoDB);
app.use("/api/categorydata", categoryAddedtoDB);
app.use("/api/category", catergoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log("Listening at " + PORT);
});
