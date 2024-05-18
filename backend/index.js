const cors = require("cors");
const app = require("express")();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute.js");
const postRouter = require("./routes/postRoute.js");
const adminRouter = require("./routes/adminRoute.js");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const path = require("path");
app.use(
  "/post-images",
  require("express").static(path.join(__dirname, "public/uploads/posts"))
);
app.use(require("express").json());
app.use("/users", userRouter);
app.use("/post", postRouter);
app.use("/admin", adminRouter);

const nodemailer = require("nodemailer");



// feedback mail using fake smtp server ethereal
app.post("/send-feedback", async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, email, message } = req.body;
  const info = await transporter.sendMail({
    from: `'"${name}👻" < ${email}>'`,
    to: `'${process.env.adminMail1}'`,
    subject: "Feedback from Contact Us Form",
    text: `${message}`, 
  });

  console.log("Message sent: %s", info.messageId);
  if(info.messageId){
    res.json({info, success:true, message: "feedback send successfully"});
  }
 
});

// end feedback code

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
