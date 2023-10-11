"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const microlocation_controller_1 = require("../controllers/microlocation.controller");
const microlocationRouter = express_1.default.Router();
microlocationRouter.route('/getAllMicrolocations').get((req, res) => new microlocation_controller_1.MicrolocationController().getAllMicrolocations(req, res));
exports.default = microlocationRouter;
//# sourceMappingURL=microlocation.routes.js.map