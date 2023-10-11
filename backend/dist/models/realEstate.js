"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let FullLocation = new Schema({
    locationId: {
        type: Number
    },
    microlocationId: {
        type: Number
    }
});
let RealEstate = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    realEstateType: {
        type: Number
    },
    fullLocation: {
        type: FullLocation
    },
    address: {
        type: String
    },
    squareMeters: {
        type: Number
    },
    numberOfRooms: {
        type: String
    },
    price: {
        type: Number
    },
    yearBuilt: {
        type: Number
    },
    condition: {
        type: String
    },
    heating: {
        type: String
    },
    floor: {
        type: Number
    },
    maxFloors: {
        type: Number
    },
    parking: {
        type: String
    },
    balcony: {
        type: Boolean
    },
    lodge: {
        type: Boolean
    },
    frenchBalcony: {
        type: Boolean
    },
    elevator: {
        type: Boolean
    },
    basement: {
        type: Boolean
    },
    garage: {
        type: Boolean
    },
    airconditioner: {
        type: Boolean
    },
    garden: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    intercom: {
        type: Boolean
    },
    telephone: {
        type: Boolean
    },
    description: {
        type: String
    },
    dateAdded: {
        type: String
    },
    addedBy: {
        type: Number
    },
    averagePrice: {
        type: Number
    },
    publicTransportation: {
        type: String
    },
    images: {
        type: Array
    },
    sold: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('RealEstate', RealEstate, 'realEstates');
//# sourceMappingURL=realEstate.js.map