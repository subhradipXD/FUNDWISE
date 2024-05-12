const express = require("express");
const { Login, Register, getCurrentUser } = require("../controllers/userController.js");
const router = express.Router();
router.post("/login", Login);
router.post("/register", Register);
router.get("/currentuser/:hashID", getCurrentUser);
module.exports = router;
