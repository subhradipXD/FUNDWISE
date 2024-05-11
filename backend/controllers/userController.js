const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
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

const jwt = require('jsonwebtoken');

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
<<<<<<< HEAD
  const token = jwt.sign({id: user._id},"397981b551eee4e01270afdaea4b4947fb1eda1517f69150200916b91fb08c0f")
=======
  const token = jwt.sign({id:user._id}, "hojoborolo");
>>>>>>> 6f173bb0c613f8bd3db24d8c7b0a01ff68c12d7a
  res.json({
    error: false,
    message: "Login success",
    response: {
      user: user,
<<<<<<< HEAD
      token: token
=======
      token:token
>>>>>>> 6f173bb0c613f8bd3db24d8c7b0a01ff68c12d7a
    },
  });
};

module.exports = {
  Register,
  Login,
};
