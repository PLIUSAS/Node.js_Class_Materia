import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId, // realaus irašo ID.
      ref: "Categories", // ObjectId gyvena/ieskotu person kolekcijoj kitaip tariant ('People')
    },
  ],
});

export default mongoose.model("Products", productSchema);
