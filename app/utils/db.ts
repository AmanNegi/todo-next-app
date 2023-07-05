import PocketBase from "pocketbase";
import Todo from "../models/todo";

// Connect with remote pocketbase instance
export const pb = new PocketBase("https://todo-next-app.pockethost.io");

export async function getAllTodos(page = 1): Promise<Todo[]> {
  const data = await pb.collection("todos").getList(page, 20, {
    sort: "-created",
  });

  var list: Todo[] = data.items.map((item) => {
    var todo: Todo = {
      collectionId: item.collectionId,
      collectionName: item.collectionName,
      completed: item.completed,
      created: item.created,
      id: item.id,
      name: item.name,
      updated: item.updated,
    };

    return todo;
  });

  // Sort on basis of completed
  const sortedList = list.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    } else {
      return 0;
    }
  });

  return sortedList;
}

export async function addTodo(todo: Todo) {
  var res = await pb.collection("todos").create(todo);
  return res;
}

export async function markToDoAsDone(id: string) {
  // Get todo by id from db
  var item: Todo = await pb.collection("todos").getOne(id);
  if (!item) {
    return new Error("Todo with this ID not found");
  }
  
  // Set the completed status to opposite
  var res = await pb
    .collection("todos")
    .update(id, { completed: !item.completed });
  return res;
}

export async function deleteTodoById(id: string) {
  var res = await pb.collection("todos").delete(id);
  return res;
}
