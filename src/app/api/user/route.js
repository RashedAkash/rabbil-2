import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));
  const reqBody = await req.json()
  const prisma = new PrismaClient()
  const result = await prisma.user.create({
    data: reqBody
  });
   

    return NextResponse.json(result);
  
};
