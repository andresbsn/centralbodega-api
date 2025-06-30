import { Router } from "express";
import { GetAllPymes } from "../controllers/pymesguayas.controller.js";

const PymesGuayasRouter = Router();

PymesGuayasRouter.get("/all", GetAllPymes);

export default PymesGuayasRouter;
