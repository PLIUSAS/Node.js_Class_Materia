import people from "./models/people.js";
import mongoose from "mongoose";

export async function createpeople(req, res) {
  const { name, lastname, age } = req.body;
  try {
    const newpeople = new people({
      name,
      lastname,
      age,
    });
    await newpeople.save();
    res.status(201).json(newpeople);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getpeople(req, res) {
  res.json(people);
}
