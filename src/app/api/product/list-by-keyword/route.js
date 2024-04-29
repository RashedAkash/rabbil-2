import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
   let { searchParams } = new URL(req.url);
   let keyword = searchParams.get("keyword");

   const prisma = new PrismaClient();
   const result = await prisma.products.findMany({
     where: { title: { contains: keyword } },

   });
  return NextResponse.json({ status: "success", data: result });
  // try {
   
    
  // } catch (e) {
  //   return NextResponse.json({ status: "fail", data: e });
  // }
}
