"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateCityController = void 0;
const realEstateCity_1 = __importDefault(require("../models/realEstateCity"));
class RealEstateCityController {
    constructor() {
        this.getAllRealEstateCities = (req, res) => {
            realEstateCity_1.default.find({}, (err, cities) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(cities);
                }
            });
        };
    }
}
exports.RealEstateCityController = RealEstateCityController;
//# sourceMappingURL=realEstateCity.controller.js.map