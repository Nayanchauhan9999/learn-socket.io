import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(chalk.magenta("database connected"));
  } catch (error) {
    console.log(chalk.red("This error occoured", error));
  }
};

export default connectToDatabase;
