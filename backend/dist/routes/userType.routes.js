"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userType_controller_1 = require("../controllers/userType.controller");
const userTypesRouter = express_1.default.Router();
userTypesRouter.route('/getAllUserTypes').get((req, res) => new userType_controller_1.UserTypeController().getAllUserTypes(req, res));
exports.default = userTypesRouter;
//# sourceMappingURL=userType.routes.js.map