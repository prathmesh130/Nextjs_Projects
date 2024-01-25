import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const USER = models?.eventuser || model("eventuser", userSchema);
export default USER;
