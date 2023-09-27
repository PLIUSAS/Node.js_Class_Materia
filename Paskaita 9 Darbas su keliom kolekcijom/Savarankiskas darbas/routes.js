import express from "express";
import {
  getCategory,
  getProduct,
  getProductCategoryvalue,
} from "./controllers.js";

const router = express.Router();

router.get("/categories", getCategory);
router.get("/products", getProduct);
router.get("/categoriesvalue", getProductCategoryvalue);

export default router;
