import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const secret = new TextEncoder().encode(process.env.JWT_KEY)
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpZCI6MTIzLCJpYXQiOjE3MDgzMTg0OTQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8iLCJleHAiOjE3MDgzMjU2OTR9.7OBBOUKyBqPVpoY_5daEeAj8xL_MqKb9WhZxyFN3N2k";
  const userInfo = await jwtVerify(token, secret);
  return NextResponse.json(userInfo)
}