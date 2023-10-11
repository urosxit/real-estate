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
exports.MicrolocationController = void 0;
const microlocation_1 = __importDefault(require("../models/microlocation"));
class MicrolocationController {
    constructor() {
        this.getAllMicrolocations = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield microlocation_1.default.find({}, (err, microlocations) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(microlocations);
                }
            }).exec();
        });
    }
}
exports.MicrolocationController = MicrolocationController;
//# sourceMappingURL=microlocation.controller.js.map