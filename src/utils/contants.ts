import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import chalk from "chalk";

export const generateJsonWebToken = (payload: any): string => {
  const jwtToken: string = jwt.sign(payload, process.env.SECRET_KEY);
  return jwtToken;
};

export const hashPassword = async (
  password: string
): Promise<string | undefined> => {
  try {
    const hashedPassord = await bcrypt.hash(password, 10);
    return hashedPassord;
  } catch (error) {
    console.log(chalk.red("error while hashing password", error));
  }
};
