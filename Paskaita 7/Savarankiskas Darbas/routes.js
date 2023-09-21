import express from "express";
import { createpeople, getpeople } from "./controllers.js";

const routes = express.Router();

routes.post("/people", createpeople);

routes.get("/people", getpeople);

export default routes;
