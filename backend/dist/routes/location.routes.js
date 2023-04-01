"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const location_controller_1 = require("../controllers/location.controller");
const locationRouter = express_1.default.Router();
//greska je bila sto sam kao rutu stavio register_agency u copypasta
locationRouter.route('/add_location').post((req, res) => new location_controller_1.LocationController().add_location(req, res));
locationRouter.route('/remove_location').post((req, res) => new location_controller_1.LocationController().remove_location(req, res));
locationRouter.route('/getAllMunicipalities').post((req, res) => new location_controller_1.LocationController().getAllMunicipalities(req, res));
exports.default = locationRouter;
//# sourceMappingURL=location.routes.js.map