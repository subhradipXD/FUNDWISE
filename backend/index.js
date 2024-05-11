const cors = require("cors");
const app = require("express")();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute.js");
const postRouter = require("./routes/postRoute.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(require("express").json());
app.use("/users", userRouter);
app.use("/post", postRouter);
const mongoose = require("mongoose");
mongoose
  // .connect(
  //   "mongodb+srv://piupranati:l4q6zImt8q8Zbp4V@db1.yhukbpb.mongodb.net/?retryWrites=true&w=majority&appName=DB1"
  // )
  .connect(
    "mongodb+srv://SubhradipXD:Joydas2000@cluster0.qquwuja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

app.listen(2000, function () {
  console.log("Server listening on");
});

app.get("/", (req, res) => {
  console.log("Api Hit From Fontend");
  res.status(200).send("Api Health Check");
});

// User.find({
//     "email": "piupranati@gmail.com",
//     "password": "piu@123"
// }).then(user=>{
//     console.log(JSON.stringify(user));
//     })
