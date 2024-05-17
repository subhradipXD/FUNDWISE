const express = require("express");
const { showAllUsers } = require("../controllers/adminController.js");
const router = express.Router();
router.get("/",showAllUsers );


module.exports = router;