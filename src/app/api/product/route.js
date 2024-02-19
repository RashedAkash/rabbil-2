import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')
  const city = searchParams.get('city')
  return NextResponse.json({name:name, city:city})
}
export const POST = async (req, res)=>{
  return NextResponse.json({ msg: "I am POST" });
}
export const PUT = async (req, res)=>{
  return NextResponse.json({ msg: "I am PUT" });
}
export const PATCH = async (req, res)=>{
  return NextResponse.json({ msg: "I am PATCH" });
}
export const DELETE = async (req, res)=>{
  return NextResponse.json({ msg: "I am DELETE" });
}