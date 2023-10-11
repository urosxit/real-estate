import express from 'express';
import { RegisteredUserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res) => new RegisteredUserController().logIn(req, res)
);

userRouter.route('/resetPassword').post(
    (req, res) => new RegisteredUserController().resetPassword(req, res)
);

userRouter.route('/getUser').post(
    (req, res) => new RegisteredUserController().getUser(req, res)
);

userRouter.route('/getUserByUsername').post(
    (req, res) => new RegisteredUserController().getUserByUsername(req, res)
);

userRouter.route('/canRegisterUser').post(
    (req, res) => new RegisteredUserController().canRegisterUser(req, res)
);

userRouter.route('/register').post(
    (req, res) => new RegisteredUserController().register(req, res)
);

userRouter.route('/getAllUsers').get(
    (req, res) => new RegisteredUserController().getAllUsers(req, res)
);

userRouter.route('/getUsersWaitingForApproval').get(
    (req, res) => new RegisteredUserController().getUsersWaitingForApproval(req, res)
);

userRouter.route('/approveUser').post(
    (req, res) => new RegisteredUserController().approveUser(req, res)
);

userRouter.route('/rejectUser').post(
    (req, res) => new RegisteredUserController().rejectUser(req, res)
);

userRouter.route('/deleteUser').post(
    (req, res) => new RegisteredUserController().deleteUser(req, res)
);

userRouter.route('/editUser').post(
    (req, res) => new RegisteredUserController().editUser(req, res)
);

export default userRouter;
