const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
//   });


const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  password: String,
  role: String,
  about: String,
  avatar: String,
  username: String,
});
module.exports= mongoose.model("User", userSchema);