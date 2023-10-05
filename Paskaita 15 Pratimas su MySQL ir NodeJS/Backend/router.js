import express from "express";

const router = express.Router();

router.get("/items");
router.post("/items");
router.delete("/items/:id");

export default router;
