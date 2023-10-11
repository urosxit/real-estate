"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/login').post((req, res) => new user_controller_1.RegisteredUserController().logIn(req, res));
userRouter.route('/resetPassword').post((req, res) => new user_controller_1.RegisteredUserController().resetPassword(req, res));
userRouter.route('/getUser').post((req, res) => new user_controller_1.RegisteredUserController().getUser(req, res));
userRouter.route('/getUserByUsername').post((req, res) => new user_controller_1.RegisteredUserController().getUserByUsername(req, res));
userRouter.route('/canRegisterUser').post((req, res) => new user_controller_1.RegisteredUserController().canRegisterUser(req, res));
userRouter.route('/register').post((req, res) => new user_controller_1.RegisteredUserController().register(req, res));
userRouter.route('/getAllUsers').get((req, res) => new user_controller_1.RegisteredUserController().getAllUsers(req, res));
userRouter.route('/getUsersWaitingForApproval').get((req, res) => new user_controller_1.RegisteredUserController().getUsersWaitingForApproval(req, res));
userRouter.route('/approveUser').post((req, res) => new user_controller_1.RegisteredUserController().approveUser(req, res));
userRouter.route('/rejectUser').post((req, res) => new user_controller_1.RegisteredUserController().rejectUser(req, res));
userRouter.route('/deleteUser').post((req, res) => new user_controller_1.RegisteredUserController().deleteUser(req, res));
userRouter.route('/editUser').post((req, res) => new user_controller_1.RegisteredUserController().editUser(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map