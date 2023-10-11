"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RealEstateCity = new Schema({
    id: {
        type: Number
    },
    city: {
        type: String
    },
    municipality: {
        type: String
    },
    microlocation: {
        type: String
    }
});
exports.default = mongoose_1.default.model('RealEstateCity', RealEstateCity, 'realEstateCities');
//# sourceMappingURL=realEstateCity.js.map