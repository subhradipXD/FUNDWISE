const { default: mongoose } = require("mongoose");
const postModel = require("../models/postModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Username = async (req, res) => {
  const { username } = req.body;
  const user = await userModel.findOne({ username });
  console.log(user);
  if (!user) {
    return res.json({ error: false, message: "Valid Username!" });
  } else {
    return res.json({ error: true, message: "Username Already Exist!" });
  }
};

const Register = async (req, res) => {
  try {
    const { name, phone, email, password, role, username } = req.body;

    const user = await userModel.findOne({ email });
    console.log(req.body);
    if (user) {
      return res.json({
        error: true,
        message: "You already have an account with this E-mail. Please login!",
      });
    }
    //   const hashPWD = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      phone,
      email,
      password,
      role,
      username,
    });

    await newUser.save();
    res.json({
      message: "User registered successfully! Please login to continue",
      error: false,
      response: newUser,
    });
  } catch (e) {
    res.status(400).json({
      message: e,
      error: true,
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    console.log(user);

    if (!user) {
      return res.json({ error: true, message: "User doesn't exist" });
    }
    if (password !== user.password) {
      res.json({ message: "Invalid Password", error: true });
    }
    const token = jwt.sign({ id: user._id }, process.env.HashID);
    res.json({
      error: false,
      message: "Login success",
      response: {
        user: user,
        token: token,
      },
    });
  } catch (e) {
    console.log("errorrr in login userController");
  }
};

const editUser = async (req, res) => {
  try {
    const user_id = req.params.userID;
    const { name, phone, email, about } = req.body;
    console.log(user_id, name, phone, email, about);
    const User = await userModel.findByIdAndUpdate(
      user_id,
      { name, email, phone, about },
      { new: true }
    );
    if (!User) {
      return res.status(400).json({ message: "User not found", error: true });
    }
    res.json({
      message: "Your profile updated successfully",
      error: false,
      response: User,
    });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const hashID = req.params.hashID;
    var decoded = jwt.verify(hashID, process.env.HashID);
    console.log(decoded);
    const userId = decoded.id;
    const User = await userModel.findById(userId);
    const UserPosts = await postModel.find({ userId });
    console.log(UserPosts);
    if (!User) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({
      error: false,
      response: {
        User,
        UserPosts,
      },
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

const editAvatar = async (req, res) => {
  try {
    const userId = req.params.userID;
    const user = await userModel.findById(userId);
    console.log(user);
    if (!user)
      return res.status(404).json({ error: true, message: "User not found" });

    // const avatarPath = req.file.path.replace(/\\/g, "/"); // Normalize path for cross-platform
    const { img } = req.body;
    userModel.updateOne(
      { email: user.email },
      { $set: { avatar: img } },
      { new: true, upsert: true, overwrite: true }
    );

    // user.avatar = avatarPath;
    // await user.save();

    res.status(200).json({
      error: false,
      message: "Avatar updated successfully",
      response: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: "Server error" });
  }
};

module.exports = {
  Username,
  Register,
  Login,
  getCurrentUser,
  editUser,
  editAvatar,
};
