const express = require('express');
const { Login, Register, users } = require('../controllers/userController.js');
const router = express.Router();
router.post('/login',Login)
router.post('/register',Register)
router.get("/",users)

module.exports = router