const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dns = require("dns");

//login and register
const authRoutes = require("./routes/authroutes");


// ===== DNS FIX FOR MONGODB SRV LOOKUP ISSUE =====
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
// =================================================

const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

console.log("🔍 MongoDB URI starts with:", process.env.MONGO_URI?.substring(0, 20));

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

//login and register
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "API Running Successfully!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log(`📡 API URL: http://localhost:${PORT}`);
});