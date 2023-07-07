"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Because this page is client side
// all below imports are automatically client components
import Todo from "../_models/todo";
import CheckBox from "./checkbox";
import DeleteIcon from "./deleteIcon";

const Item = (todo: Todo) => {
  const { push } = useRouter();

  return (
    <div
      onClick={(e) => {
        // Only push if the user clicks on the div
        // as opposed to the checkbox or delete icon
        if ((e.target as HTMLInputElement).tagName.toLowerCase() !== "input") {
          push(`/todo/${todo.id}`);
        }
      }}
      className="group border-2 border-emerald-800 border-opacity-50  text-white p-4 text-center flex flex-row min-h-[8vh] rounded-md cursor-pointer"
      key={todo.id}
    >
      <CheckBox {...todo} />
      <h1 className="text-left text-black max-w-[75%] max-h-[25vh] overflow-clip">
        {todo.name}
      </h1>
      <DeleteIcon {...todo} />
    </div>
  );
};

export default Item;
