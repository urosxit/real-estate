"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationController = void 0;
const location_1 = __importDefault(require("../models/location"));
const municipality_1 = __importDefault(require("../models/municipality"));
class LocationController {
    constructor() {
        //dohvati sve gradove i opstine
        this.getAllMunicipalities = (req, res) => {
            console.log("hello from getAllMunicipalities");
            municipality_1.default.find({}, (err, municipalities) => {
                if (err)
                    console.log(err);
                else {
                    res.json(municipalities);
                }
            });
        };
        //dodaj mikrolokaciju + ulicu u tabelu
        this.add_location = (req, res) => {
            let new_location = new location_1.default(req.body);
            let message = "add_location: ";
            console.log(new_location);
            console.log("hello from add_location");
            new_location.save({}, (err, new_location) => {
                if (err)
                    throw err;
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
        this.remove_location = (req, res) => {
            console.log("hello from remove_location");
        };
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map