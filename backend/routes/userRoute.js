const express = require("express");
const { Login, Register, getCurrentUser, editUser } = require("../controllers/userController.js");
const router = express.Router();
const multer = require("multer");
const path = require("path");

router.post("/login", Login);
router.post("/register", Register);
router.get("/currentuser/:hashID", getCurrentUser);

const storageEngine = multer.diskStorage({
    destination: "../backend/public/uploads/users/",
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  // file filter for multer
  const fileFilter = (req, file, callback) => {
    let pattern = /JPG|JPEG|PNG|SVG|jpg|jpeg|png|svg/;
  
    if (pattern.test(path.extname(file.originalname))) {
      callback(null, true);
    } else {
      callback("Error: not a valid file");
    }
  };
  // initialize multer
  const upload = multer({
    storage: storageEngine,
    fileFilter,
  });
router.post("/edit/:userID",upload.single("avatar"), editUser);



module.exports = router;
