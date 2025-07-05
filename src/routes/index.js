import { Router } from "express";
import UserRouter from "./user.router.js"; 
import UnifiePersonRouter from "./unifiedperson.router.js";

const router = Router();

router.use("/user", UserRouter);
router.use("/person", UnifiePersonRouter);



export default router;
