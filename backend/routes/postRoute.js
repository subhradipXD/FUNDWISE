const express = require("express");
const multer = require("multer");
const { feed, showposts } = require("../controllers/postController.js");
const router = express.Router();
const path = require("path");

router.get("/", showposts);

const storageEngine = multer.diskStorage({
  destination: "../backend/public/uploads/posts/",
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
router.post("/feed", upload.single("image"), feed);

module.exports = router;
