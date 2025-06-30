import { Router } from "express";
import { GetAllIESSGuayaquil } from "../controllers/iessguayaquil.controller.js";

const IESSGuayaquilRouter = Router();

IESSGuayaquilRouter.get("/all", GetAllIESSGuayaquil);

export default IESSGuayaquilRouter;
