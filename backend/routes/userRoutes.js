const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });
};

router.get("/create-admin", async (req, res) => {
  try {
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      return res.status(200).json({
        message: "Admin already exists",
        email: "admin@gmail.com",
        password: "admin123"
      });
    }

    const adminUser = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin123",
      isAdmin: true
    });

    return res.status(201).json({
      message: "Admin created successfully",
      admin: {
        id: adminUser._id,
        email: adminUser.email,
        password: "admin123"
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to create admin"
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      });
    }

    return res.status(401).json({
      message: "Invalid email or password"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Login failed"
    });
  }
});

module.exports = router;