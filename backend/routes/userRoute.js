const express = require("express");
const { Login, Register } = require("../controllers/userController.js");
const router = express.Router();
router.post("/login", Login);
router.post("/register", Register);

module.exports = router;
