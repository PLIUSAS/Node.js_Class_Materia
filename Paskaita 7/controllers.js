import Car from "./models/Car.js";

export async function createCar(req, res) {
  // Metodas postinti mašinas
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
  // Metodas gauti visas mašinas
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
