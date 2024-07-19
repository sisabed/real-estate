import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1721386234~exp=1721389834~hmac=979df67da5834124f6f07101728fe542266c75d758211ed0a0dde0a38a0785ad&w=740",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
