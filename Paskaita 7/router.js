import express from "express";
import {
  DeleteById,
  createCar,
  getCar,
  getCarById,
  updateById,
} from "./controllers.js";

const router = express.Router();

router.post("/cars", createCar);

router.get("/cars", getCar);

router.get("/cars/:id", getCarById);

router.put("/cars/:id", updateById);

router.delete("/cars/:id", DeleteById);

export default router;
