const express = require("express");
const nodemailer = require("nodemailer");
const config = require("config");

const router = express.Router();

router.post("/", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "testsender1122@gmail.com",
      pass: config.get("pass"),
    },
  });

  const mailOptions = {
    from: "",
    to: `<${req.body.email}>`,
    subject: "Test Email",
    text: "This is a test Email.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = router;
