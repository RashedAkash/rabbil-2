import { headers } from "next/headers"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  // const token =  req.cookies.get('token')
  const header = headers()
  const Date = header.get("date");
   return NextResponse.json(Date)

}