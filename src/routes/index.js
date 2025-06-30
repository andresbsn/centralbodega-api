import { Router } from "express";
import PymesGuayasRouter from "./pymesguayas.router.js";
import IESSGuayaquilRouter from "./iessguayaquil.router.js";

const router = Router();

router.use("/pymesguayas", PymesGuayasRouter);
router.use("/iessguayaquil", IESSGuayaquilRouter);

export default router;
