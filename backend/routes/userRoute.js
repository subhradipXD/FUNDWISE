const express = require("express");
const { Login, Register, getCurrentUser, editUser, Username, editAvatar } = require("../controllers/userController.js");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Multer configuration for file uploads
const storageEngine = multer.diskStorage({
  destination: "../backend/public/uploads/users/",
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// File filter for multer
const fileFilter = (req, file, callback) => {
  let pattern = /JPG|JPEG|PNG|SVG|jpg|jpeg|png|svg/;
  if (pattern.test(path.extname(file.originalname))) {
    callback(null, true);
  } else {
    callback("Error: not a valid file");
  }
};

// Initialize multer
const upload = multer({ storage: storageEngine, fileFilter });

// User routes
router.post("/login", Login);
router.post("/register", Register);
router.post("/username", Username);
router.get("/currentuser/:hashID", getCurrentUser);
router.post("/edit/:userID", upload.single("avatar"), editAvatar);
router.post("/edit/:userID", editUser);

module.exports = router;