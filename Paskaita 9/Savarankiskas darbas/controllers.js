import Categories from "./models/categories.js";
import products from "./models/products.js";
import mongoose from "mongoose";

export async function getCategory(req, res) {
  const { title, description } = req.body;
  try {
    const categorie = await Categories.find();
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProduct(req, res) {
  const { name, price } = req.body;
  try {
    const product = await products.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProductCategoryvalue(req, res) {
  const categoryValues = {};

  try {
    products.forEach((products) => {
      const { Categories, price } = products;
      if (categoryValues[Categories]) {
        categoryValues[Categories] += price;
      } else {
        categoryValues[category] = price;
      }
      res.json(categoryValues);
    });

    res.json(categoryValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
