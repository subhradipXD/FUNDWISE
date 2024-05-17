const userModel = require("../models/userModel");
const showAllUsers = async (req, res) => {
    try {
      const Alluser = await userModel.find({});
  
      res.status(200).json(Alluser);
    } catch (e) {
      res.sendStatus(400).send(e);
    }
  };
  
  module.exports = {
    showAllUsers
  };