import express from "express";
const router = express.Router();

import HomeController from "../controller/home.js";
import { getFiveDice }  from "../middleware/yams.js";

router.get("/", HomeController); 
router.get("/fiveDice", getFiveDice);

export default router;