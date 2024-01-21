import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePicture: String,
  token: String,
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
