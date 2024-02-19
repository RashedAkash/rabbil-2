import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_KEY);
    const payload = { email: 'abc@gmail.com', user_id: '1' };
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: HS256 })
      .setIssuedAt()
      .setIssuer("http://localhost:3000/")
      .setExpirationTime('2hr')
      .sign(secret)
    return NextResponse.json(token)
  } catch (error) {
    console.log(error);
  }
}