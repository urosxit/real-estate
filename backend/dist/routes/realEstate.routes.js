"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const realEstate_controller_1 = require("../controllers/realEstate.controller");
const realEstateRouter = express_1.default.Router();
realEstateRouter.route('/topFiveRealEstates').get((req, res) => new realEstate_controller_1.RealEstateController().topFiveRealEstates(req, res));
realEstateRouter.route('/getRealEstateById').post((req, res) => new realEstate_controller_1.RealEstateController().getRealEstateById(req, res));
realEstateRouter.route('/getFilteredRealEstates').post((req, res) => new realEstate_controller_1.RealEstateController().getFilteredRealEstates(req, res));
realEstateRouter.route('/getRealEstatesFromAdvertiser').post((req, res) => new realEstate_controller_1.RealEstateController().getRealEstatesFromAdvertiser(req, res));
realEstateRouter.route('/markEstateAsSold').post((req, res) => new realEstate_controller_1.RealEstateController().markEstateAsSold(req, res));
realEstateRouter.route('/getAllRealEstates').get((req, res) => new realEstate_controller_1.RealEstateController().getAllRealEstates(req, res));
realEstateRouter.route('/addNewRealEstate').post((req, res) => new realEstate_controller_1.RealEstateController().addNewRealEstate(req, res));
realEstateRouter.route('/updateAveragePrice').post((req, res) => new realEstate_controller_1.RealEstateController().updateAveragePrice(req, res));
exports.default = realEstateRouter;
//# sourceMappingURL=realEstate.routes.js.map