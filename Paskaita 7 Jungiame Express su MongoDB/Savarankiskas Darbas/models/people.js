import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    requited: true,
    minlength: 2,
    maxlength: 100,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("people", peopleSchema);
