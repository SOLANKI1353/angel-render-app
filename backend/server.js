const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/HEALTH", (req, res) => {
  res.send("OK");
});

const angelRoutes = require(
  path.join(__dirname, "../src/routes/auth.routes")
);
app.use("/api/angel", angelRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
