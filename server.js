import "dotenv/config";

console.log("🌍 ENV loaded");

import "./bot/bot.js";   // ⬅️ dotenv ke baad hi

import express from "express";
import redirectRoute from "./routes/redirect.js";
import campaignsRoute from "./routes/campaigns.js";
