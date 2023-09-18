import { cars, data } from "./db.js";

export function getCar(req, res) {
  res.json(cars);
}
export function getforBrand(req, res) {
  const brand = req.params.brand.toLowerCase();
  if (brand in cars) {
    const carModels = cars[brand];
    res.json({ brand, models: carModels });
  } else {
    res.status(404).json({ error: "Brand not found" });
  }
}

// 1. Sukurkite bendrinį GET route, kuris paduos visus duomenis.
export function getdata(req, res) {
  res.json(data);
}
//2.Sukurkite dinaminį GET route, kur URL turės automobilio markę ir pagal ją prafiltruos, ir grąžins tik tuos žmones, kurie turi šį automobilį.
export function getRoutes(req, res) {
  const carMake = req.params.carMake.toLowerCase();
  const filteredPeople = peopleWithCars.filter(
    (cars) => cars.carMake.toLowerCase() === carMake
  );
  if (filteredPeople.length > 0) {
    res.json({ cars: filteredPeople });
  } else {
    res.status(404).json({ error: "No people with that car make found" });
  }
}
//3. Sukurkite dinaminį GET route, kuris priims vartotojo id ir pagal jį grąžins atitinkamą vartotojo objektą. Hint: url parametrai visada stringai, o čia id - skaičius, tad reikės konvertuoti.
//4. Sukurkite GET route, kuris grąžins visus el. paštus (grąžinamas formatas: ["anb@abc.com", "abc@abc.com", "abc@acb.com]).
//5. Sukurkite GET route, į kurį pasikreipus, grąžins visų moterų (gender: Female) vardą ir pavardę (formatas: ["Rita Kazlauskaite", "Monika Simaskaite"]).
