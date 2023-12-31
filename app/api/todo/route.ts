import { NextRequest, NextResponse } from "next/server";
import { getAllTodos, addTodo, markToDoAsDone } from "@/app/_utils/db";
import { ZodError, z } from "zod";

// (GET) localhost:3000/api/todo
export async function GET(req: NextRequest) {
  var todos = await getAllTodos();
  return new NextResponse(JSON.stringify(todos), {
    status: 200,
  });
}

// (POST) localhost:3000/api/todo
export async function POST(req: NextRequest) {
  try {
    var data = await req.json();

    // Validate the data
    const schema = z.object({
      name: z.string().min(5),
    });
    schema.parse(data);
    var res = await addTodo(data);

    return NextResponse.json({ res });
  } catch (error) {
    // check if error is type of [ZodError]
    if (error instanceof ZodError) {
      return new NextResponse(JSON.stringify({ error: error.errors }), {
        status: 400,
      });
    }

    return new NextResponse(JSON.stringify({ error }), { status: 400 });
  }
}

// PUT (localhost:3000/api/todo)
export async function PUT(req: NextRequest) {
  try {
    var data = await req.json();

    const schema = z.object({
      id: z.string().min(1),
    });
    schema.parse(data);
    var res = await markToDoAsDone(data.id);

    // Update the todo as done
    return NextResponse.json({ res });
  } catch (e) {
    if (e instanceof ZodError) {
      return new NextResponse(JSON.stringify({ error: e }), { status: 400 });
    }
    return NextResponse.json({
      error: "Something went wrong! Did you pass the id in the body?",
    });
  }
}
