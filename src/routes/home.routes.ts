import express from "express";
import { homeController } from "../Controllers";

const router = express.Router();

router.get("/", homeController);

export default router;
