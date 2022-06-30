import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
  },
  { collection: "users" }
);

const User = mongoose.model("UserSchema", userSchema);

export default User;
