import mongoose from "mongoose";

const carsSchema = new mongoose.Schema({
  year: {
    type: Number, // tipas
    requited: true, // privaloma
    min: 1950, // minimali reiksme
    max: 2023, // maximali reiksme
  },
  make: {
    type: String,
    required: true,
    minlength: 2, // minimalus stringo dalis
    maxlength: 100, /// maximalus stringo dalis
  },
  dataOfCreation: {
    type: Date,
    default: Date.now, // Jeigu nieko nepaduosim jis automatiskai sukurs dabarties data.
  },
});

export default mongoose.model("Cars", carsSchema); // Cars pavadinimas, CarsSchema pasiduodam schema kuria naudosim.
