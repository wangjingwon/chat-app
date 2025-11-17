import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    // --- Phần đã biết ---
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // --- Các trường mới ---
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  // --- Phần tùy chọn mới ---
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
