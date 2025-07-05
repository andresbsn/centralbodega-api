import { Router } from "express";
import { login } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post("/login", login);

export default UserRouter;