import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  people: [
    {
      type: mongoose.Schema.Types.ObjectId, // realaus irašo ID.
      ref: "Person", // ObjectId gyvena/ieskotu person kolekcijoj kitaip tariant ('People')
    },
  ],
});

export default mongoose.model("Group", groupSchema);
