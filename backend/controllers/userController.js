const userModel = require("../models/userModel");
console.log(userModel);
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

  if (!user) {
    return res.json({ error: true, message: "User doesn't exist" });
  }
  if (password !== user.password) {
    res.json({ message: "Invalid Password", error: true });
  }
  res.json({
    error: false,
    message: "Login success",
    response: {
      user: user,
    },
  });
};
const users = async (req, res) => {
  console.log("Hi bal ");
  res.status(200).send("shubhradip paglachoda");
};
module.exports = {
  users,
  Register,
  Login,
};
