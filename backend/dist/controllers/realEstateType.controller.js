"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateTypeController = void 0;
const realEstateType_1 = __importDefault(require("../models/realEstateType"));
class RealEstateTypeController {
    constructor() {
        this.getAllRealEstateTypes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield realEstateType_1.default.find({}, (err, types) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(types);
                }
            }).exec();
        });
    }
}
exports.RealEstateTypeController = RealEstateTypeController;
//# sourceMappingURL=realEstateType.controller.js.map