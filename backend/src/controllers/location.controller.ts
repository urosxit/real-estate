import { Request, Response } from "express-serve-static-core";
import location from "../models/location";
import municipality from "../models/municipality";

export class LocationController {

    //dohvati sve gradove i opstine
  getAllMunicipalities = (req: Request, res: Response) => {
    console.log("hello from getAllMunicipalities");
    municipality.find({}, (err, municipalities) => {
      if(err) console.log(err);
      else{
          res.json(municipalities);
      }
  })
  }
    
  //dodaj mikrolokaciju + ulicu u tabelu
  add_location = (req: Request, res: Response) => {
    let new_location = new location(req.body);
    let message = "add_location: ";

    console.log(new_location);
    console.log("hello from add_location");

    new_location.save({
    }, (err, new_location) => {
      if(err) throw err
      else {
            console.log("ubacio u bazu", new_location);
            message += "ubacio mikro i ulicu u bazu";
            res.json(message);
           }
    });


/*
      id: { type: Number },
  city: { type: String },
  municipality: { type: String },
  microlocation: { type: String },
  street: { type: String }
  */
    
  };

  //izbrisi mikrolokaciju + ulicu iz baze samo ako nema nekretnina u toj ulici
  remove_location = (req: Request, res: Response) => {
    console.log("hello from remove_location");
    
  };
}
