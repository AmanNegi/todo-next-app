"use client";

import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Todo from "../models/todo";
import { useRouter } from "next/navigation";

const DeleteIcon = (todo: Todo) => {
  const router = useRouter();

  return (
    <div
      onClick={() => deleteItem(todo.id)}
      className="h-[30px] w-[30px] ml-auto cursor-pointer"
    >
      <div className="h-[100%] w-[100%] flex lg:group-hover:flex lg:hidden bg-emerald-500 justify-center items-center rounded-md">
        <AiOutlineDelete className="" />
      </div>
    </div>
  );

  async function deleteItem(id: string) {
    console.log("Delete Item: ", id);
    await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }
};

export default DeleteIcon;
