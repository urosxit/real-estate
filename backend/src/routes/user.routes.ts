import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res)=> new UserController().login(req, res)
)

userRouter.route('/change_pass').post(
    (req, res)=> new UserController().change_pass(req, res)
)

userRouter.route('/register').post(
    (req, res)=> new UserController().register(req, res)
)


export default userRouter;