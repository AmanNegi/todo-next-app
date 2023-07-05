import { deleteTodoById } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

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
