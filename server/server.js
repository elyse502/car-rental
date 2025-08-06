import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

// Initialize Express App
const app = express();

// Connect Database
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Server is running...🎆"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} => http://localhost:${PORT} 🚀`)
);
