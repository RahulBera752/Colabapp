const express = require("express");
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Users API Working" });
});

// Get all users (placeholder)
router.get("/all", (req, res) => {
  res.json({ message: "Get all users endpoint" });
});

// Create user (placeholder)
router.post("/create", (req, res) => {
  res.json({ message: "Create user endpoint", data: req.body });
});

module.exports = router;