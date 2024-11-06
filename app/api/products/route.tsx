import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(requset: NextRequest) {
  const products = await prisma.product.findMany()

  return NextResponse.json(products)
}

export async function POST(requset: NextRequest) {
  const body = await requset.json()

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json({ error: validation.error.errors}, {status: 400});

  const product = await prisma.product.findUnique({ // Check unique email in database
    where: {name: body.name}
  })
  if (product)
    return NextResponse.json({error: 'product had already exist'}, {status: 400})

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price
    }
  })
  return NextResponse.json(newProduct, {status: 201})
}