import { NextRequest, NextResponse } from "next/server";

const products = [
  {id: 1, name: 'Milk', price: 2.5},
  {id: 2, name: 'Bread', price: 3.5},
]

export function GET(requset: NextRequest) {
  return NextResponse.json(products)
}