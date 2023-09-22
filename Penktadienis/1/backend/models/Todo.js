import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minlenght: 5,
    maxlenght: 100,
  },
  description: {
    type: String,
    require: true,
    minlenght: 5,
    maxlenght: 200,
  },
  dataOfCreation: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

export default mongoose.model("Todo", todoSchema);
