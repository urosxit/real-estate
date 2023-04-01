import express from 'express'
import { Collection, DocumentProvider } from 'mongoose';
import agency from '../models/agency';
import Agency from '../models/agency';

export class AgencyController{
    find_agency = (req: express.Request, res: express.Response) =>{


        console.log("find agency here!");
        //dohvati sva polja 
        let name = req.body.name;
        let address = req.body.address;
        let city = req.body.city;
        let telephone = req.body.telephone;
        let pib = req.body.pib; 

        

        let param1 = { "naziv": name};
        let param2 = { "grad": city};
        let param3 = { "PIB": pib};

        console.log(param1, param2, param3);


        /*agency.findOne().and([param1, param2]).then((agency) => {
                if(agency){
                console.log("nasao jednog, ne mozemo da ubacimo onda", agency);
                res.json("nasao");
                }
                else{
                    res.json("nisam nasao");
                    console.log("nisam nasao");
                }
            }).catch((err) => {
                throw err;
            })*/


        agency.findOne(
            {
                $or:[
                        { $and: [{ "naziv": name}, { "grad" : city}] },
                        {  "PIB" : pib},
                        {  "naziv": name} //msm da ovo ne treba
                    ]
            }, (err, agency) =>{
                                if (err) console.log(err);
                                else  {
                                        if(agency){
                                                    console.log("nasao jednog, ne mozemo da ubacimo onda", agency);
                                                    res.json("nasao");
                                                    }
                                                    else{
                                                        res.json("nisam nasao");
                                                        console.log("nisam nasao");
                                                        }
                                        }
                            }
        );

    }

    getAllAgencies = (req: express.Request, res: express.Response)=>{
        
        Agency.find({}, (err, agencies) => {
            if(err) console.log(err);
            else{
                res.json(agencies);
            }
        })




    }


    
    register_agency = async (req: express.Request, res: express.Response)=>{
        
        //dohvati sve podatke iz post zahteva
        let new_agency = new Agency(req.body);
        


         //dohvati sva polja 
         let name = req.body.name;
         let address = req.body.address;
         let city = req.body.city;
         let telephone = req.body.telephone;
         let pib = req.body.pib; 

         //poruka 
         let message = "poruka: ";
 
         let exists = true;
         
 
         let param1 = { "naziv": name};
         let param2 = { "grad": city};
         let param3 = { "PIB": pib};
 
         console.log(param1, param2, param3);

        

        //proveri da li takva agencija postoji sa tim imenom i setuj uslov na true ako postoji
        await agency.findOne(
            {
                $or:[
                        { $and: [{ "naziv": name}, { "grad" : city}] },
                        {  "PIB" : pib},
                        {  "naziv": name} //msm da ovo ne treba
                    ]
            }, (err, agency) =>{
                                if (err) console.log(err);
                                else  {
                                        if(agency){
                                                    console.log("nasao jednog, ne mozemo da ubacimo onda", agency);
                                                    message += "nasao agenciju, proverite podatke";
                                                    res.json(message);
                                                    }
                                        else{
                                            console.log("nisam nasao");
                                            new_agency.save({}, (err, new_agency) => {
                                                            if(err) throw err
                                                            else {
                                                                console.log("ubacio u bazu", new_agency);
                                                                message += "ubacio agenciju u bazu";
                                                                res.json(message);
                                                            }
                                                        });
                                                        
                                            }
                                            
                                        }
                            }
        ).exec();

        
             


        
       
    }
    


   

   
        
    

    
/*
            agency.findOne().and([param1, param2]).or([param3]).then((agency) => {
                if(agency){
                console.log("nasao jednog, ne mozemo da ubacimo onda", agency);
                res.json("nasao");
                }
                else{
                    res.json("nisam nasao");
                    console.log("nisam nasao");
                }
            }).catch((err) => {
                throw err;
            })
*/
    

   /* remove_agency = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;

        console.log(username, password, type);
        console.log(password);
        console.log(type);

       
    }*/
    
    /*
    //dohvati sve agencije
    all_agencies = (req: express.Request, res: express.Response) => {
        agency.find((err, agencije) => {
            if(err) console.log(err);
            else res.json(agencije);
                });
    }*/

}