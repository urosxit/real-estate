"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const location_controller_1 = require("../controllers/location.controller");
const locationRouter = express_1.default.Router();
locationRouter.route('/getAllLocations').get((req, res) => new location_controller_1.LocationController().getAllLocations(req, res));
exports.default = locationRouter;
//# sourceMappingURL=location.routes.js.map