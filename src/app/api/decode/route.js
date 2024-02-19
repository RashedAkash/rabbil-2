import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMSIsImlhdCI6MTcwODMwNTg3MSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwLyIsImV4cCI6MTcwODMxMzA3MX0.Kh86YMNH0e8tkc-ptRyYXNZwHFRUIzZC68L0Ylrd1G0";
  const secret = new TextEncoder().encode("123456")
  const information= await jwtVerify(token,secret)
  return NextResponse.json(information)
}