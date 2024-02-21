import { Router } from "express";
import { createUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/createuser', async (req, res) => {
    const {name, email, password} = req.body;
    const newUser = await createUser(name, email, password);
    res
    .status(201)
    .json({message: 'User created succesfully', newUser})
});

export {userRouter}