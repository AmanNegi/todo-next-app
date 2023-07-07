import React from "react";
import Todo from "../_models/todo";
import Item from "./item";

const List = async () => {
  const list: Todo[] = await getData();

  return (
    <div>
      <h1 className="text-4xl text-emerald-800 font-bold mb-4">{"To-do's"}</h1>
      {list.length <= 0 && <p>No todos</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((todo) => {
          return <Item key={todo.id} {...todo} />;
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
