import express from "express";
import {
  addItem,
  deleteFallBackRoute,
  deleteItem,
  getItems,
} from "./controllers.js";

const router = express.Router();

router.get("/items", getItems);
router.post("/items", addItem);
router.delete("/items/:id", deleteItem);

router.delete("*", deleteFallBackRoute);

export default router;
