const express = require("express");
const Enquiry = require("../models/Enquiry");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// public: create enquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// admin: get all enquiries
router.get("/", protect, admin, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;