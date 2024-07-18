import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "./error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); //salt
  const newUser = new User({ username, email, password });
  try {
    await newUser.save(); //it takes time to create new user so "Await" and async function
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
