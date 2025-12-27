const express = require("express");
const cors = require("cors");
const SmartAPI = require("smartapi-javascript");

const app = express();
app.use(cors());

const smartApi = new SmartAPI({
  api_key: process.env.ANGEL_API_KEY
});

async function connectAngel() {
  try {
    await smartApi.generateSession(
      process.env.ANGEL_CLIENT_ID,
      process.env.ANGEL_MPIN,
      process.env.ANGEL_TOTP
    );
    console.log("Angel One Connected");
  } catch (e) {
    console.error("Angel Connection Failed", e.message);
  }
}

connectAngel();

app.get("/health", (req, res) => res.send("OK"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running on", PORT));