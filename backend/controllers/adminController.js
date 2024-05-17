const userModel = require("../models/userModel");
const postModel = require("../models/postModel");

const showAllUsers = async (req, res) => {
  try {
    const Alluser = await userModel.find({});

    res.status(200).json(Alluser);
  } catch (e) {
    res.sendStatus(400).send(e);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    await postModel.deleteMany({ userId });

    res
      .status(200)
      .json({ message: "User and associated posts deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  showAllUsers,
  deleteUser,
};
