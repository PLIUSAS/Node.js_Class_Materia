import { todos } from "./db.js";
import { v4 as uuidv4 } from "uuid";

export function getTodos(req, res) {
  res.json(todos);
}

export function deleteTodosById(req, res) {
  const { id } = req.params;

  const index = todos.findIndex((todos) => todos.id === +id);

  todos.splice(index, 1);

  res.json({ message: `'todo with id ${id} Deleted'` });
}
export function updateTodoById(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  const index = todos.findIndex((todo) => todo.id === +id);

  todos[index] = {
    ...todos[index],
    title,
    description,
  };

  res.json({ message: "todo updated" });
}

export function addTodo(req, res) {
  const { title, description } = req.body;
  const id = uuidv4();
  const newTodo = {
    id,
    title,
    description,
  };

  todos.push(newTodo);

  res.json(newTodo);
}
