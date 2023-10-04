import express from "express";
import {
  createPhone,
  deletePhoneById,
  getPhones,
  getPhoneById,
  updatePhoneById,
} from "./controllers.js";

const router = express.Router();

router.post("/phone", createPhone);

router.get("/phone", getPhones);

router.get("/phone/:id", getPhoneById);

router.delete("/phone/:id", deletePhoneById);

router.put("/phone/:id", updatePhoneById);

export default router;
