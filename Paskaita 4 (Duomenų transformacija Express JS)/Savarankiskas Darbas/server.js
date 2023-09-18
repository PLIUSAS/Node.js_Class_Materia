import express from "express";
import router from "./router.js";
const PORT = 3000;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Pasirašyk NodeJS projektą, kuriame yra tik vienas GET request, kuris turi dinaminę nuorodą - paima automobilio markę (pvz. /cars/:brand). Pagal markę, paduoda/grąžina (su response) atitinkamą array iš cars objekto.
