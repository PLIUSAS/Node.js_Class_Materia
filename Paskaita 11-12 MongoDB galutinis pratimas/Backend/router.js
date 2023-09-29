import express from "express";
import {
  createMemberships,
  createUsers,
  deleteMembershipsById,
  getMemberships,
  getUsers,
  getUsersByName,
} from "./controllers.js";

const router = express.Router();

router.get("/memberships", getMemberships);
router.get("/users", getUsers);
router.get("/users/:name", getUsersByName);
router.post("/memberships", createMemberships);
router.post("/users", createUsers);
router.delete("/memberships/:id", deleteMembershipsById);

export default router;
