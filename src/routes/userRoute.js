import { Router } from "express";
import { createUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/createuser', createUser);

export {userRouter}