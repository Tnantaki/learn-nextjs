import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);

  if (id > 10)
    return NextResponse.json({ error: "User not found"}, {status: 404});
  
  return NextResponse.json({id: 1, name: 'Mos'})
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
  if (id !== 1)
    return NextResponse.json({ error: "User not found"}, {status: 404});
  
  // step 3: Update data and return status 200
  return NextResponse.json({id: 1, name: body.name})
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);

  // step 1: Fetch user data by given id, if not found return status 404
  if (id !== 1)
    return NextResponse.json({ error: "User not found"}, {status: 404});
  
  // step 2: Delete user and return status 204
  return new NextResponse(null, {status: 204})
}