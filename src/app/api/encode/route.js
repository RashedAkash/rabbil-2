// import { SignJWT } from "jose";
// import { NextResponse } from "next/server";

// export const GET = async (req, res) => {
//   const secret = new TextEncoder().encode("123456");
//   const payload = { email: "abc@gmail.com", user_id: "1" };
//   const token = await new SignJWT(payload)
//     .setProtectedHeader({ alg: 'HS256' })
//     .setIssuedAt()
//     .setIssuer("http://localhost:3000/")
//     .setExpirationTime("2h")
//     .sign(secret);
//   return NextResponse.json({ token: token });
// };

// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function POST(req, res) {
 

  

    try {
      // Send email
      await transporter.sendMail({
        from: "Your Name <your-email@gmail.com>",
        to: email,
        subject: subject,
        text: message,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } 

