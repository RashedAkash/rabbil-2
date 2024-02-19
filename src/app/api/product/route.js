import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  // const { searchParams } = new URL(req.url)
  // const name = searchParams.get('name')
  // const city = searchParams.get('city')
  const products = await req.json()
  return NextResponse.json(products);
}
export const POST = async (req, res) => {
  const products = await req.json();
  return NextResponse.json(products);
}
export const PUT = async (req, res) => {
  const formData = await req.formData()
  const data=  formData.get('name')
  return NextResponse.json(data);
}
export const PATCH = async (req, res)=>{
  return NextResponse.json({ msg: "I am PATCH" });
}
export const DELETE = async (req, res)=>{
  return NextResponse.json({ msg: "I am DELETE" });
}