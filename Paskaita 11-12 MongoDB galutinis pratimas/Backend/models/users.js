import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Services",
  },
});

export default mongoose.model("Users", userSchema);
