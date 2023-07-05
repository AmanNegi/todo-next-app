"use client";

import React from "react";
import Todo from "../models/todo";

const CheckBox = (todo: Todo) => {
  const [completed, setCompleted] = React.useState(todo.completed);
  return (
    <input
      onChange={(e) => {
        updateCheckStatus(todo.id);
      }}
      checked={completed}
      type="checkbox"
      name="complete"
      id="complete"
      className="w-5 mr-2 appearance-none bg-emerald-100 focus:border-emerald-500 text-emerald-500 rounded-full h-[20px]"
    />
  );

  async function updateCheckStatus(id: string) {
    await fetch("http://localhost:3000/api/todo", {
      method: "PUT",
      body: JSON.stringify({ id }),
    });

    // Update Local State
    setCompleted(!completed);
  }
};

export default CheckBox;
