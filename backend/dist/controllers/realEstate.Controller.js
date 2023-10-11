"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateController = void 0;
const realEstate_1 = __importDefault(require("../models/realEstate"));
class RealEstateController {
    constructor() {
        this.topFiveRealEstates = (req, res) => {
            realEstate_1.default.find({}, (err, realEstates) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstates);
                }
            });
        };
        this.getRealEstateById = (req, res) => {
            realEstate_1.default.find({
                'id': req.body.id
            }, (err, realEstates) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstates);
                }
            });
        };
        this.getFilteredRealEstates = (req, res) => {
            realEstate_1.default.find({
                'realEstateType': req.body.realEstateType,
                'fullLocation.locationId': { $in: req.body.locationIds },
                'fullLocation.microlocationId': { $in: req.body.microlocationIds },
                'price': { $lte: req.body.price },
                'squareMeters': { $gte: req.body.squareMeters },
                'numberOfRooms': { $gte: req.body.numberOfRooms },
                'sold': false
            }, (err, realEstates) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstates);
                }
            });
        };
        this.getRealEstatesFromAdvertiser = (req, res) => {
            realEstate_1.default.find({
                'addedBy': req.body.addedBy,
            }, (err, realEstates) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstates);
                }
            });
        };
        this.markEstateAsSold = (req, res) => {
            realEstate_1.default.updateOne({ 'id': req.body.id }, { $set: { 'sold': true } }, (err, realEstate) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstate);
                }
            });
        };
        this.getAllRealEstates = (req, res) => {
            realEstate_1.default.find({}, (err, realEstates) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstates);
                }
            });
        };
        this.addNewRealEstate = (req, res) => {
            let fullLocation = {
                'locationId': req.body.locationId,
                'microlocationId': req.body.microlocationId,
            };
            realEstate_1.default.collection.insertOne({
                'id': req.body.id,
                'name': req.body.name,
                'realEstateType': req.body.realEstateType,
                'fullLocation': fullLocation,
                'address': req.body.address,
                'squareMeters': req.body.squareMeters,
                'numberOfRooms': req.body.numberOfRooms,
                'price': req.body.price,
                'yearBuilt': req.body.yearBuilt,
                'condition': req.body.condition,
                'heating': req.body.heating,
                'floor': req.body.floor,
                'maxFloors': req.body.maxFloors,
                'parking': req.body.parking,
                'balcony': req.body.balcony,
                'lodge': req.body.lodge,
                'frenchBalcony': req.body.frenchBalcony,
                'elevator': req.body.elevator,
                'basement': req.body.basement,
                'garage': req.body.garage,
                'airconditioner': req.body.airconditioner,
                'garden': req.body.garden,
                'intercom': req.body.intercom,
                'telephone': req.body.telephone,
                'description': req.body.description,
                'dateAdded': req.body.dateAdded,
                'addedBy': req.body.addedBy,
                'publicTransportation': req.body.publicTransportation,
                'averagePrice': req.body.averagePrice,
                'images': req.body.images,
                'sold': false
            }, (err, realEstate) => {
                if (err) {
                    console.log('Error adding new real estate:', err);
                    res.json(false);
                }
                else if (realEstate) {
                    res.json(true);
                }
            });
        };
        this.updateAveragePrice = (req, res) => {
            realEstate_1.default.updateMany({ 'id': { $in: req.body.ids } }, { $set: { 'averagePrice': req.body.averagePrice } }, (err, realEstates) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(realEstates);
                }
            });
        };
    }
}
exports.RealEstateController = RealEstateController;
//# sourceMappingURL=realEstate.controller.js.map