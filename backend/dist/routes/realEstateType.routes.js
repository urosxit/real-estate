"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const realEstateType_controller_1 = require("../controllers/realEstateType.controller");
const realEstateTypeRouter = express_1.default.Router();
realEstateTypeRouter.route('/getAllRealEstateTypes').get((req, res) => new realEstateType_controller_1.RealEstateTypeController().getAllRealEstateTypes(req, res));
exports.default = realEstateTypeRouter;
//# sourceMappingURL=realEstateType.routes.js.map