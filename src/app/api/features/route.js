import { PrismaClient } from "@prisma/client";

const { data } = require("autoprefixer");
const { NextResponse } = require("next/server");

export const GET = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.features.findMany();
    return NextResponse.json({ status: true, data: result });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
};
