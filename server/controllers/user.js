import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const JWT_SECRET = "w23iofdjjrdwqpolhghfj3oifjresa980di9dwdxvcfdfo;lhgdf";

export const login = async (req, res) => {
  const { name, pass } = req.body;
  const user = await User.findOne({ name }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (await bcrypt.compare(pass, user.pass)) {
    console.log("login success");
    const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET);

    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", error: "Invalid username/password" });
};

export const register = async (req, res) => {
  console.log(req.body);
  const { name, pass: plainTextPassword } = req.body;
  const pass = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      name,
      pass,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
