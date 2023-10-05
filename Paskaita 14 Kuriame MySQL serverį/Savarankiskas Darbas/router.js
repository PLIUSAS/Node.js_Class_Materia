import express from "express";
import { addShirts, getCheapShirts } from "./controlers.js";

const router = express.Router();

router.get(`/`, (req, res) => {
  res.json({
    message: "Server is working",
  });
});
router.get(`/shirts`, getCheapShirts);
router.get(`/shirts/:size`, getCheapShirts);
router.post(`/shirts`, addShirts);
router.get(`*`, (req, res) => {
  res.json({
    message: "Page not found",
  });
});

export default router;
