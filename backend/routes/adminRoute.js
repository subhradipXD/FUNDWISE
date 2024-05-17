const express = require("express");
const {
  showAllUsers,
  deleteUser,
} = require("../controllers/adminController.js");
const router = express.Router();
router.get("/", showAllUsers);

router.delete("/:userId", deleteUser);

module.exports = router;
