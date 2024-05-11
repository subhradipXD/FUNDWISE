const cors = require("cors");
const app = require("express")();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute.js");
const postRouter = require("./routes/postRoute.js");

const multer = require('multer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log("directory-name 👉️", __dirname);

const path = require('path');
app.use(
  "/post-images",
  require("express").static(path.join(__dirname, "public/uploads/posts/"))
);
// console.log(path.join(__dirname, "public/uploads/posts/"));
app.use(require("express").json());
app.use("/users", userRouter);
app.use("/post", postRouter);

app.use(multer({ dest: 'public/uploads/posts/' }).any());


























require('dotenv').config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.mongo_URI)
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

app.listen(process.env.PORT, function () {
  console.log("Server listening on");
});

app.get("/", (req, res) => {
  res.status(200).send("Api Health Check");
});


