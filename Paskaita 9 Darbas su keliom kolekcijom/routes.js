import express from "express";
import {
  addPersonToGroup,
  createGroup,
  createPerson,
  getGroupById,
} from "./controllers.js";

const router = express.Router();

router.post("/group", createGroup);

router.post("/person", createPerson);

router.post("/person/:personId/group/:groupId", addPersonToGroup);

router.get("/group/:id", getGroupById);

export default router;
