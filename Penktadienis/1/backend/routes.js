import express from "express";
import { getTodos, deleteTodosById, updateTodoById } from "./controllers.js";

const router = express.Router();

router.get("/todo", getTodos);

router.delete("/todo/:id", deleteTodosById);

router.put("/todo/:id", updateTodoById);

export default router;
