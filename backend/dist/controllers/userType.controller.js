"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeController = void 0;
const userType_1 = __importDefault(require("../models/userType"));
class UserTypeController {
    constructor() {
        this.getAllUserTypes = (req, res) => {
            userType_1.default.find({}, (err, types) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(types);
                }
            });
        };
    }
}
exports.UserTypeController = UserTypeController;
//# sourceMappingURL=userType.controller.js.map