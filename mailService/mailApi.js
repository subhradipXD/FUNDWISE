const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//For feedback mail
function sendEmailForFeedback(
  recipient,
  message = "",
  name = "",
  queryEmail = ""
) {
  return new Promise((resolve, reject) => {
    transportObject = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ecartxvstore@gmail.com",
        pass: "ytmschqgaiyncsxn",
      },
    });

    console.log(recipient);
    // console.log(confirmation)

    const mailConfig = {
      from: "ecartxvstore@gmail.com",
      to: recipient,
      subject: "Feedback",
      html: `
            <div>
            <h3>${name}</h3>
            <p>${message}</p>
            <p>mail : ${queryEmail}</p>
            </div>
            `,
    };

    transportObject.sendMail(mailConfig, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Successfully Sent" });
    });
  });
}

//for interested owner mail service
function sendEmailForInterest(ownerEmail, name, phone, email, title) {
  return new Promise((resolve, reject) => {
    transportObject = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ecartxvstore@gmail.com",
        pass: "ytmschqgaiyncsxn",
      },
    });

    const mailConfig = {
      from: "ecartxvstore@gmail.com",
      to: ownerEmail,
      subject: "Feedback",
      html: `
            <div>
            <p><h3>${title}</h3> was liked by <h3>${name}</h3> a lot!</p>
            <p>Congratulation! You have an investor knocking at your door!</p>
            <p>Found the post to be interesting and would like to connect with you.</p>
            <p>mail : ${email}</p>
            <h4>ph: ${phone}</h4>
            </div>
            `,
    };

    transportObject.sendMail(mailConfig, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Successfully Sent" });
    });
  });
}
function sendEmailForOTP(ownerEmail, OTP) {
  return new Promise((resolve, reject) => {
    transportObject = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ecartxvstore@gmail.com",
        pass: "ytmschqgaiyncsxn",
      },
    });

    const mailConfig = {
      from: "ecartxvstore@gmail.com",
      to: ownerEmail,
      subject: "OTP for Verification",
      html: `
            <div>
            <p><h3>${OTP}</h3> is your OTP</p>
            <p>This OTP is valid for next 10 minutes.</p>
            <h4>Regards.</h4>
            </div>
            `,
    };

    transportObject.sendMail(mailConfig, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Successfully Sent" });
    });
  });
}

app.post("/send_email_feedback", (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  try {
    sendEmailForFeedback("ecartxvstore@gmail.com", message, name, email)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {});
  } catch (e) {}
  // .catch(e => res.status(500).send(e.message));
});

app.post("/send_email_interest", (req, res) => {
  const {
    ownerEmail,
    title,
    interestUser: { email, phone, name },
  } = req.body;
  try {
    sendEmailForInterest(ownerEmail, name, phone, email, title)
      .then((data) => {
        res.status(200).send("OK");
      })
      .catch((e) => {
        console.log(e.message);
      });
  } catch (e) {}
});

app.post("/send_email_OTP", (req, res) => {
  const { OTP, email } = req.body;
  console.log(OTP, email);
  try {
    sendEmailForOTP(email, OTP)
      .then((data) => {
        res.status(200).send("OK");
      })
      .catch((e) => {});
  } catch (e) {}
});

app.listen(PORT, () => console.log("listening on PORT:" + PORT));
