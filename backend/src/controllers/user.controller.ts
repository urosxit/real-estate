import express from 'express'
import { DocumentProvider } from 'mongoose';
import user from '../models/user';
import User from '../models/user';

export class UserController{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;

        console.log(username, password, type);
        console.log(password);
        console.log(type);

        User.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else {
                res.json(user)
                console.log(user);
            }
        
        
        })
    }
    
 

    change_pass = async (req: express.Request, res: express.Response)=>{

        //stvari za pretragu 
        let username = req.body.username;
        let old_password = req.body.old_password;
        let new_password = req.body.new_password;
        

        //uslovi 
        let exists_with_username = false;
        let its_a_match = false;

        //data ti ne treba, care
        const data = await User.findOne({'username': username}, (err, user) => {
            if (err) console.log(err);
            else {
                if(user){
                    exists_with_username = true;
                }
            }
        }).exec();

        await User.findOne({'password': old_password, 'username': username, }, (err, user) =>{
            if (err) console.log(err);
            else  {
                if(user){
                    its_a_match = true;
                }
            }
        }).exec();

        
       
        
        console.log(username, old_password, new_password);
        

        const filter = {'username': username, 'password': old_password};
        const update = { 'password': new_password};
             
        //dohvati tog korisnika iz baze koristeci samo username
        User.collection.findOneAndUpdate( filter, {$set : update}, (err, user) =>{
            if (err) console.log(err);
            else  {
                console.log(its_a_match, exists_with_username);
                let msg = '';
                if(user){
                    if (its_a_match){
                        msg = 'success';
                    } 
                     else if (exists_with_username == true && its_a_match == false){
                        msg = 'wrong password';
                    } else if (exists_with_username == false){
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
        

           
    }



    register = (req: express.Request, res: express.Response) =>{
            let msg = 'iz register metode user.controller.ts';
            //napravim novog korisnika, novog modela
            let user = new User(req.body);
            let username = req.body.username;
            let msg1 = 'dodat korisnik';
            let msg2 = 'greska';
            let msg3 = 'user with that username already exists!';

            console.log(msg, user);
            console.log(username);

            //provera da li korisnik postoji
            User.findOne({'username': username}, (err, user)=>{
                if(err) console.log(err);
                else {
                    if(user){
                    res.json(msg3);
                    console.log(msg3);
                    return;
                    }
                    }
                }
            );
           
            /*
            user.save().then((user)=>{
                res.status(200).json(msg1);
            }).catch((err)=>{
                res.status(400).json(msg2);
            });*/

    }


 /*   dohvatiKorisnika = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime;
        Korisnik.findOne({'kor_ime': kor_ime}, (err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik)
        })
    }*/


}