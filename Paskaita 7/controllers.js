import Car from "./models/Car.js";
import mongoose from "mongoose";

export async function createCar(req, res) {
  // POST Metodas postinti mašinas
  const { year, make } = req.body;

  try {
    const newCar = new Car({
      year,
      make,
    });
    await newCar.save(); // isisaugom
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCar(req, res) {
  // Get Metodas gauti visas mašinas
  const { make, year } = req.query;
  try {
    const query = {};
    if (make) {
      query.make = make;
    }
    if (year) {
      query.year = year;
    }

    const cars = await Car.find(query, { __v: 0 }); // find - kokius dalykus norim grazint o kokius norim negrazint
    // Antras objektas to ko nereikia grazint arba to ko reikia parasius 1 grazins parasius 0 negrazins
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCarById(req, res) {
  // Get metodas Gaunam mašina pagal ID
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `Invalid id ${id}` });
  }

  try {
    const car = await Car.findById(id, { __v: 0 });
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ error: `car with id ${id} is not found` });
    }
  } catch (error) {
    req.status(500).json({ error: error.message });
  }
}
export async function updateById(req, res) {
  // put metodas zinutes pakeitimas
  const { id } = req.params;
  const { make, year } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `Invalid id ${id}` });
  }
  try {
    const car = await Car.findById(id);
    if (car) {
      if (make) {
        // jeigu atsiunte make tai atnaujins make
        car.make = make;
      }
      if (year) {
        // jeigu atsiunte year tai atnaujins year
        car.year = year;
      }
      await car.save(); // tada palaukiam kol masina isisaugos
      res.json(car);
    } else {
      res.status(404).json({ message: `Car with id ${id} not found` });
    }
  } catch (error) {
    req.status(500).json({ error: error.message });
  }
}

export async function DeleteById(req, res) {
  // Delete metodas istrinam pagal id
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `Invalid id ${id}` });
  }
  try {
    const response = await Car.findByIdAndDelete(id);
    if (response) {
      res.json({ message: `Car with id ${id} deleted successfully` }); // zinute patvirtina jog istrynem
    } else {
      res.status(404).json({ message: `Car with id ${id} not found` }); // zinute pasako jog to id nebera
    }
  } catch (error) {
    req.status(500).json({ error: error.message });
  }
}
