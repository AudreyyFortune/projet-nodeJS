import express from "express";
const router = express.Router();

import HomeController from "../controller/home.js";

router.get("/", HomeController);

export default router;