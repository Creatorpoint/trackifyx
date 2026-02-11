import "dotenv/config";      // load ENV first
import "./bot/bot.js";       // start Telegram bot

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 TrackifyX backend running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
