const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// public: place order
router.post("/", async (req, res) => {
  try {
    const { customerName, email, phone, address, products, totalAmount } = req.body;

    const order = await Order.create({
      customerName,
      email,
      phone,
      address,
      products,
      totalAmount
    });

    res.status(201).json({
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// admin: get all orders
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;