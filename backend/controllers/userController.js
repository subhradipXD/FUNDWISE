const postModel = require("../models/postModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
console.log(userModel);
// require('dotenv').config();

const Register = async (req, res) => {
  try {
    const { name, phone, email, password, role } = req.body; //destructure

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
};

const editUser = async (req, res) => {
  console.log(req.body);
  try {
    const user_id = req.params.userID;
    const { name, phone, email, username, about } = req.body;
    const file = req.file !== undefined ? req.file.filename : "";

    const User = await userModel.findByIdAndUpdate(
      user_id,
      { name, email, phone, username,about, avatar:file },
      { new: true }
    );
    if (!User) {
      return res.status(400).json({ message: "User not found" , error:true});
    }

    res.json({ message: "Your profile updated successfully", error: false });
  } catch (e) {
    res.sendStatus(400).send(e);
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

module.exports = {
  Register,
  Login,
  getCurrentUser,
  editUser,
};
