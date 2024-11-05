import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// even though 'request' arg is not use.
// But,We put it to prevent Next.js server cache the data
export function GET(request: NextRequest) {
  return NextResponse.json([
    {id: 1, name: 'Mos'},
    {id: 2, name: 'Prach'},
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validation = schema.safeParse(body) // Validate body with schema
  if (!validation.success)
    return NextResponse.json({ error: validation.error.errors}, {status: 400});

  return NextResponse.json({id: 1, name: body.name}, {status: 201})
}