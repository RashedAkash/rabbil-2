import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const name = searchParams.get('name')
  const city = searchParams.get('city');
  return NextResponse.json({id: id, name:name,city:city})
}


export const POST = async (req, res) => {
  const users = await req.json()
  return NextResponse.json(users)
}

export const PUT = async (req, res) => {
  const formData = await req.formData()
  const name =  formData.get('name')
  return NextResponse.json(name)
}