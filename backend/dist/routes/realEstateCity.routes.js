"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const realEstateCity_controller_1 = require("../controllers/realEstateCity.controller");
const realEstateCityRouter = express_1.default.Router();
realEstateCityRouter.route('/getAllRealEstateCities').get((req, res) => new realEstateCity_controller_1.RealEstateCityController().getAllRealEstateCities(req, res));
exports.default = realEstateCityRouter;
//# sourceMappingURL=realEstateCity.routes.js.map