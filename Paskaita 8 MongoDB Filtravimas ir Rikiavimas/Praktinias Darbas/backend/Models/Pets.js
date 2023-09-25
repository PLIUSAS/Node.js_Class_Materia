import mongoose from "mongoose";
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("Pet", petSchema);
