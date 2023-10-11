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
exports.RegisteredUserController = void 0;
const registeredUser_1 = __importDefault(require("../models/registeredUser"));
class RegisteredUserController {
    constructor() {
        this.logIn = (req, res) => {
            registeredUser_1.default.findOne({ 'username': req.body.username, 'password': req.body.password }, (err, registeredUser) => {
                if (err)
                    console.log('Error when trying to log in user');
                else
                    res.json(registeredUser);
            });
        };
        this.canRegisterUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var userExists = '';
            yield registeredUser_1.default.findOne({ 'username': req.body.username }, (err, registeredUser) => {
                if (err)
                    console.log('Error fetching user by username:', err);
                else if (registeredUser) {
                    userExists = 'Korisnik sa unetim korisničkim imenom već postoji.';
                }
            }).exec();
            yield registeredUser_1.default.findOne({ 'email': req.body.email }, (err, registeredUser) => {
                if (err)
                    console.log('Error fetching user by email:', err);
                else if (registeredUser) {
                    userExists += 'Korisnik sa unetim mejlom već postoji.';
                    console.log(userExists);
                }
                res.json(userExists);
            }).exec();
        });
    }
}
exports.RegisteredUserController = RegisteredUserController;
//# sourceMappingURL=registeredUser.controller.js.map