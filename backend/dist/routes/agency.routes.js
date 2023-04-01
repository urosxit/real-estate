"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agency_controller_1 = require("../controllers/agency.controller");
const agencyRouter = express_1.default.Router();
/*agencyRouter.route('/register_agency').post(
    (req, res)=> new AgencyController().register_agency(req, res)
)*/
//greska je bila sto sam kao rutu stavio register_agency u copypasta
agencyRouter.route('/find_agency').post((req, res) => new agency_controller_1.AgencyController().find_agency(req, res));
agencyRouter.route('/register_agency').post((req, res) => new agency_controller_1.AgencyController().register_agency(req, res));
agencyRouter.route('/getAllAgencies').post((req, res) => new agency_controller_1.AgencyController().getAllAgencies(req, res));
exports.default = agencyRouter;
//# sourceMappingURL=agency.routes.js.map