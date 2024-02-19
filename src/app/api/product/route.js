import { NextResponse } from "next/server"

export const GET = async (req, res)=>{
  return NextResponse.json({msg:'I am Get'})
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