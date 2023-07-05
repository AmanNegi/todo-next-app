"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Form = () => {
  const [name, setName] = React.useState("");
  const router = useRouter();

  return (
    <form className="mb-8 " onSubmit={handleOnSubmit}>
      <div className="flex flex-col md:flex-row justify-between h-[8vh]">
        <input
          placeholder="Todo Name"
          className="ml-2 w-full px-4"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          id="name"
          name="name"
        />

        <button
          className="bg-emerald-800 text-white px-8 ml-2 rounded-sm"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setName("");
    await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.refresh();
  }
};

export default Form;
