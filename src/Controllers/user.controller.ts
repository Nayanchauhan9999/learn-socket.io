import { Request, Response } from "express";
import { generateJsonWebToken, hashPassword } from "../utils/contants";
import UserModel from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.json({
      message: "Name is required",
    });
  }
  if (!email) {
    return res.json({
      message: "email is required",
    });
  }

  if (!password) {
    return res.json({
      message: "Password is required",
    });
  }

  const hashingUsersPassword = await hashPassword(password);

  const token = generateJsonWebToken({
    name,
    email,
    password: hashingUsersPassword,
  });

  if (hashingUsersPassword) {
    const createUser = await UserModel.create({
      name,
      email,
      password: hashingUsersPassword,
      token: token,
    });
    console.log(createUser);
    return res.status(201).json(createUser);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const usersList = await UserModel.find({});
    return res.status(200).send(usersList);
  } catch (error) {
    console.log(error);
  }
};
