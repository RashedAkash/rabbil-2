import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const GET = async (req,res) => {
 try {
   const transporter = nodemailer.createTransport({
     host: "mail.teamrabbil.com",
     port: 25,
     secure: false,
     auth: {
       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
       user: "info@teamrabbil.com",
       pass: "~sR4[bhaC[Qs",
     },
     tls:{rejectUnauthorized:false}
   });
   const mailOptions = {
     from: "mail.teamrabbil.com",
     to: "rashedhossain416400@gmail.com",
     subject: "welcome",
     text:"test email body"
   };
   await transporter.sendMail(mailOptions)
 return  NextResponse.json({status:"200"})
 } catch (error) {
  console.log(error);
 }
};
