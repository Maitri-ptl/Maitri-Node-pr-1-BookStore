import { Router } from "express";
import { deleteUser, getAllUser, gettUserById, loginUser, registerUser, updateUser } from "../controller/user.controller.js";
import validation from '../middlewares/validation.middleware.js'

const userRouter = Router();

//Resgister

userRouter.post('/register',validation,registerUser)

//Login

userRouter.post('/login',validation, loginUser)

userRouter.get('/',getAllUser)

userRouter.get('/:id',gettUserById)

userRouter.patch('/:id',updateUser)

userRouter.delete('/:id',deleteUser)

export default userRouter;