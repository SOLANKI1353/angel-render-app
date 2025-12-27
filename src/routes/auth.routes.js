
const express = require("express");
const router = express.Router();
const { loginAngel } = require("../services/angel.service");

router.get("/angel/login", async (req, res) => {
  try {
    const data = await loginAngel();
    res.json({ status: "success", data });
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message });
  }
});

module.exports = router;
