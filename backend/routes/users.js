import express from 'express';
import { loginUser,registerUser,loginAdmain } from '../controllers/userController.js';
const userRouter = express.Router();


userRouter.post('/register',registerUser )
userRouter.post('/login',loginUser )
userRouter.post('/admain',loginAdmain )

export default userRouter;
