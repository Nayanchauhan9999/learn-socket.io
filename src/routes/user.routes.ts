import express from "express";
import { createUser, getAllUsers } from "../Controllers/user.controller";

const router = express.Router();

router.post("/signup", createUser);
router.get("/", getAllUsers);

export default router;
