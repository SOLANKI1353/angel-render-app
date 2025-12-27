const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Health check (VERY IMPORTANT FOR RENDER)
app.get("/HEALTH", (req, res) => {
  res.send("OK");
});

// 🔹 Angel routes
const angelRoutes = require("./src/routes/auth.routes");
app.use("/api/angel", angelRoutes);

// 🔹 PORT (Render provides this automatically)
const PORT = process.env.PORT || 5000;

// 🔹 SERVER MUST LISTEN
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
