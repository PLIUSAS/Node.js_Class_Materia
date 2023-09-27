import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId, // realaus irašo ID.
      ref: "Products", // ObjectId gyvena/ieskotu person kolekcijoj kitaip tariant ('People')
    },
  ],
});

export default mongoose.model("Categories", categoriesSchema);
