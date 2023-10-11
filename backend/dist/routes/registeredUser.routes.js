"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registeredUser_controller_1 = require("../controllers/registeredUser.controller");
const registeredUserRouter = express_1.default.Router();
registeredUserRouter.route('/login').post((req, res) => new registeredUser_controller_1.RegisteredUserController().logIn(req, res));
registeredUserRouter.route('/canRegisterUser').post((req, res) => new registeredUser_controller_1.RegisteredUserController().canRegisterUser(req, res));
exports.default = registeredUserRouter;
//# sourceMappingURL=registeredUser.routes.js.map