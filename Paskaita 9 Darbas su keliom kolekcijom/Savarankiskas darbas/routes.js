import express from "express";
import {
  addProductsToCategory,
  getCategory,
  getProduct,
  getProductToCategory,
} from "./controllers.js";

const router = express.Router();

router.get("/categories", getCategory);
router.get("/products", getProduct);
router.post(
  "/products/:productsId/categories/:categoriesId",
  addProductsToCategory
);
router.get("/categoriesvalue", getProductToCategory);

export default router;
