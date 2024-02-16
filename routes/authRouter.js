import express from "express";
import User from "../model/user.model.js";

const router = express.Router();

// http://localhost:2000/api/auth/register
router.route("/register").post(async (req, res) => {
  try {
    const userObject = {
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: req.body.password, // Store the raw password
    };

    const newUser = new User(userObject);
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating a User" });
  }
});

// http://localhost:2000/api/auth/login
router.route("/login").post(async (req, res) => {
  try {
    const user = await User.findOne({
      number: req.body.number,
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.password !== req.body.password) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
