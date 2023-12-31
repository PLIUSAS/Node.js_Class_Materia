import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes.js";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
