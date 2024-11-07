import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(_: NextRequest) {
  // prisma.user => access to our model User
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validation = schema.safeParse(body) // Validate body with schema
  if (!validation.success)
    return NextResponse.json({ error: validation.error.errors}, {status: 400});

  const user = await prisma.user.findUnique({ // Check unique email in database
    where: {email: body.email}
  })
  if (user)
    return NextResponse.json({error: 'email has been used.'}, {status: 400})

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  });

  return NextResponse.json(newUser, {status: 201})
}