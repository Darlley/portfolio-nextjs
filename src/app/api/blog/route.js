import { NextResponse } from "next/server";

export async function GET(request, response) {
  return NextResponse.json({message: "Não estarei mais usando o Notion :)"})
}
