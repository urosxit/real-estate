"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    id: { type: Number },
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String },
    password: { type: String },
    city: { type: String },
    birthday: { type: String },
    telephone: { type: String },
    email: { type: String },
    //sta ti je ovo type? buyer seller
    type: { type: String },
    //zaposlen u agenciji ili ne
    agent_or_not: { type: Boolean },
    //agencija
    agency: { type: String },
    licence_number: { type: Number },
    approved: { type: Boolean }
});
exports.default = mongoose_1.default.model("User", User, "users");
//# sourceMappingURL=user.js.map