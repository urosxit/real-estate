"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MunicipalityController = void 0;
const municipality_1 = __importDefault(require("../models/municipality"));
class MunicipalityController {
    constructor() {
        this.getAllMunicipalities = (req, res) => {
            municipality_1.default.find({}, (err, municipalities) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(municipalities);
                }
            });
        };
    }
}
exports.MunicipalityController = MunicipalityController;
//# sourceMappingURL=municipality.controller.js.map