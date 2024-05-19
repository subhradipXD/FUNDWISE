const express = require("express");
const {
  Login,
  Register,
  getCurrentUser,
  editUser,
  Username,
  editAvatar,
} = require("../controllers/userController.js");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads/users/"),
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storageEngine });

router.post("/login", Login);
router.post("/register", Register);
router.post("/username", Username);
router.get("/currentuser/:hashID", getCurrentUser);
router.post("/edit-avatar/:userID", upload.single("avatar"), editAvatar);
router.post("/edit/:userID", editUser);

module.exports = router;
