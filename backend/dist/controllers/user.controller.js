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
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let type = req.body.type;
            console.log(username, password, type);
            console.log(password);
            console.log(type);
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    res.json(user);
                    console.log(user);
                }
            });
        };
        this.change_pass = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //stvari za pretragu 
            let username = req.body.username;
            let old_password = req.body.old_password;
            let new_password = req.body.new_password;
            //uslovi 
            let exists_with_username = false;
            let its_a_match = false;
            //data ti ne treba, care
            const data = yield user_1.default.findOne({ 'username': username }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    if (user) {
                        exists_with_username = true;
                    }
                }
            }).exec();
            yield user_1.default.findOne({ 'password': old_password, 'username': username, }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    if (user) {
                        its_a_match = true;
                    }
                }
            }).exec();
            console.log(username, old_password, new_password);
            const filter = { 'username': username, 'password': old_password };
            const update = { 'password': new_password };
            //dohvati tog korisnika iz baze koristeci samo username
            user_1.default.collection.findOneAndUpdate(filter, { $set: update }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    console.log(its_a_match, exists_with_username);
                    let msg = '';
                    if (user) {
                        if (its_a_match) {
                            msg = 'success';
                        }
                        else if (exists_with_username == true && its_a_match == false) {
                            msg = 'wrong password';
                        }
                        else if (exists_with_username == false) {
                            msg = 'user does not exist';
                        }
                        res.json(msg);
                        console.log(msg);
                        msg = '';
                        its_a_match = false;
                        exists_with_username = false;
                    }
                }
            });
        });
        this.register = (req, res) => {
            let msg = 'iz register metode user.controller.ts';
            //napravim novog korisnika, novog modela
            let user = new user_1.default(req.body);
            let username = req.body.username;
            let msg1 = 'dodat korisnik';
            let msg2 = 'greska';
            let msg3 = 'user with that username already exists!';
            console.log(msg, user);
            console.log(username);
            //provera da li korisnik postoji
            user_1.default.findOne({ 'username': username }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    if (user) {
                        res.json(msg3);
                        console.log(msg3);
                        return;
                    }
                }
            });
            /*
            user.save().then((user)=>{
                res.status(200).json(msg1);
            }).catch((err)=>{
                res.status(400).json(msg2);
            });*/
        };
        /*   dohvatiKorisnika = (req: express.Request, res: express.Response)=>{
               let kor_ime = req.body.kor_ime;
               Korisnik.findOne({'kor_ime': kor_ime}, (err, korisnik)=>{
                   if(err) console.log(err);
                   else res.json(korisnik)
               })
           }*/
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map