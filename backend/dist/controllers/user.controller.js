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
const user_1 = __importDefault(require("../models/user"));
class RegisteredUserController {
    constructor() {
        this.logIn = (req, res) => {
            user_1.default.findOne({ 'username': req.body.username, 'password': req.body.password }, (err, registeredUser) => {
                if (err)
                    console.log('Error when trying to log in user', err);
                else
                    res.json(registeredUser);
            });
        };
        this.resetPassword = (req, res) => {
            user_1.default.findOne({ 'username': req.body.username }, (err, registeredUser) => {
                if (err) {
                    console.log('Error when trying to find user', err);
                    res.json(false);
                }
                else {
                    user_1.default.collection.updateOne({ 'username': req.body.username }, { $set: { 'password': req.body.password } });
                    res.json(true);
                }
            });
        };
        this.getUser = (req, res) => {
            user_1.default.findOne({ 'username': req.body.username }, (err, registeredUser) => {
                if (err) {
                    console.log('Error when trying to fetch user', err);
                    res.json(null);
                }
                else
                    res.json(registeredUser);
            });
        };
        this.getUserByUsername = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield user_1.default.findOne({ 'username': req.body.username }, (err, registeredUser) => {
                if (err) {
                    console.log('Error when trying to fetch in user', err);
                    res.json(null);
                }
                else
                    res.json(registeredUser);
            }).exec();
        });
        this.canRegisterUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var userExists = '';
            yield user_1.default.findOne({ 'username': req.body.username }, (err, registeredUser) => {
                if (err)
                    console.log('Error fetching user by username:', err);
                else if (registeredUser) {
                    userExists = 'Korisnik sa unetim korisničkim imenom već postoji.';
                }
            }).exec();
            yield user_1.default.findOne({ 'email': req.body.email }, (err, registeredUser) => {
                if (err)
                    console.log('Error fetching user by email:', err);
                else if (registeredUser) {
                    userExists += 'Korisnik sa unetim mejlom već postoji.';
                    console.log(userExists);
                }
                res.json(userExists);
            }).exec();
        });
        this.register = (req, res) => {
            user_1.default.collection.insertOne({
                'username': req.body.username,
                'password': req.body.password,
                'email': req.body.email,
                'firstName': req.body.firstName,
                'lastName': req.body.lastName,
                'birthDate': req.body.birthDate,
                'city': req.body.city,
                'phoneNumber': req.body.phoneNumber,
                'agency': req.body.agency,
                'licenseNo': req.body.licenseNo,
                'profileImage': req.body.profileImage,
                'userType': req.body.userType,
                'waitingApproval': true,
                'denied': false
            }, (err, createdUser) => {
                if (err) {
                    console.log('Error creating user:', err);
                    res.json(false);
                }
                else if (createdUser) {
                    res.json(true);
                }
            });
        };
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield user_1.default.find({}, (err, users) => {
                if (err) {
                    console.log('Error when trying to fetch users', err);
                    res.json(null);
                }
                else
                    res.json(users);
            }).exec();
        });
        this.getUsersWaitingForApproval = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield user_1.default.find({ 'waitingApproval': true }, (err, users) => {
                if (err) {
                    console.log('Error when trying to fetch users', err);
                    res.json(null);
                }
                else
                    res.json(users);
            }).exec();
        });
        this.approveUser = (req, res) => {
            user_1.default.updateOne({ 'username': req.body.username }, { $set: { 'waitingApproval': false } }, (err, result) => {
                if (err) {
                    console.log('Error when trying to update user', err);
                    res.json(null);
                }
                else
                    res.json(result);
            });
        };
        this.editUser = (req, res) => {
            user_1.default.updateOne({ 'id': req.body.id }, { $set: { 'waitingApproval': false } }, (err, result) => {
                if (err) {
                    console.log('Error when trying to update user', err);
                    res.json(null);
                }
                else
                    res.json(result);
            });
        };
        this.rejectUser = (req, res) => {
            user_1.default.updateOne({ 'username': req.body.username }, { $set: { 'waitingApproval': false, 'denied': true } }, (err, result) => {
                if (err) {
                    console.log('Error when trying to update user', err);
                    res.json(null);
                }
                else
                    res.json(result);
            });
        };
        this.deleteUser = (req, res) => {
            console.log('delete');
            user_1.default.deleteOne({ 'username': req.body.username }, (err) => {
                if (err) {
                    console.log('Error when trying to delete user', err);
                    res.json(null);
                }
                else
                    res.json('User was successfully deleted');
            });
        };
    }
}
exports.RegisteredUserController = RegisteredUserController;
//# sourceMappingURL=user.controller.js.map