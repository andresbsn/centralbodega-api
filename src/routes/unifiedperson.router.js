import { Router } from "express";
import { getDetailPerson } from "../controllers/unifiedperson.controller.js";
import { searchUnifiedPerson } from "../controllers/unifiedperson.controller.js";


const UnifiePersonRouter = Router();

UnifiePersonRouter.get("/search", searchUnifiedPerson);
UnifiePersonRouter.get("/unified/:id", getDetailPerson);



export default UnifiePersonRouter;