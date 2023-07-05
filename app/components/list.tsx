import React from "react";
import Todo from "../models/todo";
import CheckBox from "./checkbox";
import DeleteIcon from "./deleteIcon";

const List = async () => {
  const list: Todo[] = await getData();

  return (
    <div>
      <h1 className="text-4xl text-emerald-800 font-bold mb-4">{"To-do's"}</h1>
      {list.length <= 0 && <p >No todos</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((todo) => {
          return (
            <div
              className="group border-2 border-emerald-800 border-opacity-50  text-white p-4 text-center flex flex-row min-h-[8vh] rounded-md"
              key={todo.id}
            >
              <CheckBox {...todo} />
              <h1 className="text-left text-black">{todo.name}</h1>
              <DeleteIcon {...todo} />
            </div>
          );
        })}
      </div>
    </div>
  );

  async function getData() {
    const data = await fetch("http://localhost:3000/api/todo", {
      cache: "no-cache",
    });

    try {
      const jsonData = await data.json();
      const list: Todo[] = jsonData;

      return list;
    } catch (e) {
      console.log("Error: ", e);
      return [];
    }
  }
};

export default List;
