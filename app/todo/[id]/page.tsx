import Todo from "@/app/models/todo";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const TodoItem = async ({ params }: { params: { id: string } }) => {
  const todo: Todo = await getTodo();

  if (todo === null) {
    return <h1>An Error Occurred</h1>;
  }

  return (
    <section>
      <Link href={"/"}>
        <div className="mb-4 rounded-full h-[50px] w-[50px] bg-emerald-500 flex justify-center items-center text-white">
          <BiArrowBack />
        </div>
      </Link>
      <div className="flex flex-row justify-between">
        <div className="max-w-[75%]">
          <h1 className="text-2xl  text-black">{todo.name}</h1>
          <div className="flex flex-row">
            <p className="mr-2">Status: </p>
            <p>{todo.completed ? "Completed" : "Not Completed"} </p>
          </div>
        </div>
        <button className="bg-red-400 text-white px-6 max-h-10  rounded-md">
          Delete
        </button>
      </div>
    </section>
  );

  async function getTodo() {
    const data = await fetch(`http://localhost:3000/api/todo/${params.id}`, {
      cache: "no-cache",
    });

    const jsonData = await data.json();
    const todo: Todo = jsonData;

    return todo;
  }
};

export default TodoItem;
