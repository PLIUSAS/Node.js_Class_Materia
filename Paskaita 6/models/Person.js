import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String, // name bus stringas
  age: Number, // age bus skaičius
});

const personModel = mongoose.model("Person", personSchema); // Pavadinimas ir schema kuria naudosime kiekvienam post metodui.

export default personModel;
