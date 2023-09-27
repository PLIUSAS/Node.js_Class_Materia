import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlenght: 5,
    maxlength: 200,
  },
  password: {
    type: String,
    require: true,
    minlenght: 6,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId, // pasiemam ObjectId.
    ref: "Group", // pasakom jog jieskotu groups kolekcijoje. Kitaip tariant (./Group.js) tik tenais grupes pavadinimas 'Group' o čia daugiskaita, nes vistiek parašys daugiskaita.
  },
});

export default mongoose.model("Person", personSchema);
