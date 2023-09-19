import express from "express";
import {
  getCar,
  getError,
  getRoutes,
  getdata,
  getforBrand,
} from "./controllers.js";

const router = express.Router();

router.get("/", getCar);

router.get("/cars/:brand", getforBrand);

// 1.Sukurkite bendrinį GET route, kuris paduos visus duomenis.
router.get("/data", getdata);
//2. Sukurkite dinaminį GET route, kur URL turės automobilio markę ir pagal ją prafiltruos, ir grąžins tik tuos žmones, kurie turi šį automobilį.
router.get("/data/:carMake", getRoutes);
//3. Sukurkite dinaminį GET route, kuris priims vartotojo id ir pagal jį grąžins atitinkamą vartotojo objektą. Hint: url parametrai visada stringai, o čia id - skaičius, tad reikės konvertuoti.
//4. Sukurkite GET route, kuris grąžins visus el. paštus (grąžinamas formatas: ["anb@abc.com", "abc@abc.com", "abc@acb.com]).
//5. Sukurkite GET route, į kurį pasikreipus, grąžins visų moterų (gender: Female) vardą ir pavardę (formatas: ["Rita Kazlauskaite", "Monika Simaskaite"]).

router.all("*", getError);

export default router;
