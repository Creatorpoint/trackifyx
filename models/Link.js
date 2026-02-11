const mongoose = require("mongoose");

module.exports = mongoose.model("Link", new mongoose.Schema({
  code: String,
  url: String,
  clicks: { type: Number, default: 0 },
  createdBy: String,
  createdAt: { type: Date, default: Date.now }
}));
