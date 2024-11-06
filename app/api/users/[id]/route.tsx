import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);

  // if can't found user by id, Prisma return null
  const user = await prisma.user.findUnique({
    where: { id }
  });

  if (!user)
    return NextResponse.json({ error: "User not found"}, {status: 404});
  
  return NextResponse.json(user)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  const body = await request.json()

  // step 1: Validate body, if invalid return status 400
  if (!body.name)
    return NextResponse.json({ error: "name is required"}, {status: 400});
  
  // step 2: Fetch user data by given id, if invalid return status 404
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user)
    return NextResponse.json({ error: "User not found"}, {status: 404});
  
  // step 3: Update data and return status 200
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);

  // step 1: Fetch user data by given id, if not found return status 404
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user)
    return NextResponse.json({ error: "User not found"}, {status: 404});
  
  // step 2: Delete user and return status 204
  await prisma.user.delete({ where: { id: user.id } });
  return new NextResponse(null, {status: 204})
}