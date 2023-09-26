import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Pet from "./Models/Pets.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.get("/pets", async (req, res) => {
  try {
    const Pets = await Pet.find({}, { __v: 0 });
    res.json(Pets);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/pets", async (req, res) => {
  const { name, type, age } = req.body;
  try {
    const newPets = new Pet({
      name,
      type,
      age,
    });
    await newPets.save();
    res.status(201).json(newPets);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/pets/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const Pets = await Pet.find({ type }, { __v: 0 });
    res.json(Pets);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/pets/byoldest/1", async (req, res) => {
  const { age } = req.body;
  try {
    const Pets = await Pet.find().sort({ age: -1 });
    res.json(Pets);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
