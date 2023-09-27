import Categories from "./models/categories.js";
import Products from "./models/products.js";
import mongoose from "mongoose";

export async function getCategory(req, res) {
  const { title, description } = req.body;
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProduct(req, res) {
  const { name, price } = req.body;
  try {
    const product = await Products.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function addProductsToCategory(req, res) {
  const { productId, categoryId } = req.params;
  try {
    const categories = await Categories.findById(categoryId);
    const productMongoId = new mongoose.Types.ObjectId(productId);
    categories.products.push(productMongoId);
    await categories.save();

    const product = await Products.findById(productId);
    const categoriesMongoId = new mongoose.Types.ObjectId(categoryId);
    product.categories = categoriesMongoId;
    await product.save();

    res.json({ message: "Product added to category" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function getProductToCategory(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
