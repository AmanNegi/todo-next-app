import { deleteTodoById, getTodoById } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    var res = await getTodoById(params.id);
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (e) {
    return new NextResponse(JSON.stringify({ error: e }), {
      status: 400,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } } // explicitly define the type of params
) {
  try {
    const res = await deleteTodoById(params.id);
    return NextResponse.json({ message: "Deleted Item successfully", res });
  } catch (e) {
    return new NextResponse(JSON.stringify({ error: e }), {
      status: 400,
    });
  }
}
