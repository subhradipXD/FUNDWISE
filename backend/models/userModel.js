const mongoose = require("mongoose");
const { Buffer } = require("node:buffer");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  about: String,
  avatar: { type: String, required: false },
  username: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("User", userSchema);
