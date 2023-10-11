"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyController = void 0;
const agency_1 = __importDefault(require("../models/agency"));
class AgencyController {
    constructor() {
        this.getAllAgencies = (req, res) => {
            agency_1.default.find({}, (err, agencies) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(agencies);
                }
            });
        };
        this.addNewAgency = (req, res) => {
            agency_1.default.collection.insertOne({
                'name': req.body.name,
                'locationId': req.body.locationId,
                'address': req.body.address,
                'phoneNumber': req.body.phoneNumber,
                'pib': req.body.pib
            }, (err, agency) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(agency);
                }
            });
        };
    }
}
exports.AgencyController = AgencyController;
//# sourceMappingURL=agency.controller.js.map