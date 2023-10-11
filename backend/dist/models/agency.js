"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Agency = new Schema({
    name: {
        type: String
    },
    locationId: {
        type: Number
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    pib: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Agency', Agency, 'agencies');
//# sourceMappingURL=agency.js.map