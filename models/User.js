const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: "user" }
}));
