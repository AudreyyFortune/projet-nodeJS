import express from "express";
const router = express.Router();

import HomeController from "../controller/home.js";
import { getFiveDice }  from "../middleware/yams.js";
import ResultController from "../controller/result.js"

router.get("/", HomeController); 
router.post("/", getFiveDice);
router.get("/fiveDice", getFiveDice);
router.get("/results", ResultController);

export default router;