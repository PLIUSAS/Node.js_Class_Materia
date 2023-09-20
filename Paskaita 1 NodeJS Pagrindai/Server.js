// npm init -y  - sukuria node aplikacija
// npm run - paleidzia skripta is packege.json
// npm install [package pavadinimas] - suinstaliuoja npm package
// npm install --save-dev [package pavadinimas] - suinstaliuoja npm package kaip dev dependency
// npm install -g [package pavadinimas] - suinstaliuoja npm package globaliai
// nodemon [failo pavadinimas.js] - paleidzia aplikacija
// npm install - atsiuncia visus package is package.json
// ctrl + c - sustabdo terminalo veikima

import express from "express";
import casual from "casual";

const app = express();

app.get("/test", (req, res) => {
  res.json({
    message: "Hello world!",
  });
});
// http://localhost:3000/test

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});

city = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Miami",
  "San Francisco",
  "Boston",
  "Seattle",
  "Dallas",
  "Atlanta",
];

random_city = Math.random(casual.city);
console.log(random_city);
