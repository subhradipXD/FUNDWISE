const userModel = require("../models/userModel");


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
console.log(userId);
    // Find the user by ID and delete it
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  showAllUsers,
  deleteUser
};
