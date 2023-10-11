"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredUserTypeController = void 0;
const registeredUserType_1 = __importDefault(require("../models/registeredUserType"));
class RegisteredUserTypeController {
    constructor() {
        this.getAllUserTypes = (req, res) => {
            registeredUserType_1.default.find({}, (err, types) => {
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
exports.RegisteredUserTypeController = RegisteredUserTypeController;
//# sourceMappingURL=registeredUserType.controller.js.map