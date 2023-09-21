import express from "express";
import { addNewPerson } from "./controllers.js";

const router = express.Router();

router.get("/");

router.post("/", addNewPerson);

export default router;
