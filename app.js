const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;
const sendmail = async (req, res, next) => {
    try {
        const code = '1234';
        const to_email = "jtshk@icloud.com";
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "selmonbhoi690@gmail.com",
                pass: "tqfekfnjtivbbmvx",
            },
        });

        const info = await transporter.sendMail({
            from: `"Attend-Go 👻" <${to_email}>`,
            to: to_email,
            subject: "Verification Code",
            text: "",
            html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Email Verification</h2>
            <p>Hello,</p>
            <p>Your verification code is: <strong>${code}</strong></p>
            <p>Please use this code to verify your email address.</p>
            <p>If you did not request this verification, you can safely ignore this email.</p>
            <p>Thank you!</p>
        </div>`
        });

        res.send(`1`);
    } catch (error) {
        res.status(500).send("0");
    }
};

app.get("/", sendmail);




app.listen(PORT, () => {
    console.log("Listen " + PORT);
});
