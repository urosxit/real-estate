"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    id: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthDate: {
        type: String
    },
    city: {
        type: Number
    },
    phoneNumber: {
        type: String
    },
    agency: {
        type: Number
    },
    licenseNo: {
        type: String
    },
    profileImage: {
        type: String
    },
    userType: {
        type: Number
    },
    waitingApproval: {
        type: Boolean
    },
    denied: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('User', User, 'users');
//# sourceMappingURL=user.js.map