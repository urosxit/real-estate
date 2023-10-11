import { FullLocation } from "./fullLocation";

export class RealEstate {
    id: number;
    name: string;
    realEstateType: number;
    fullLocation: FullLocation;
    address: string;
    squareMeters: number;
    numberOfRooms: string;
    price: number;
    yearBuilt: number;
    condition: string;
    heating: string;
    floor: number;
    maxFloors: number;
    parking: string;
    balcony: boolean;
    lodge: boolean;
    frenchBalcony: boolean;
    elevator: boolean;
    basement: boolean;
    garage: boolean;
    airconditioner: boolean;
    garden: boolean;
    internet: boolean;
    intercom: boolean;
    telephone: boolean;
    description: string;
    dateAdded: string;
    addedBy: number;
    averagePrice: number;
    publicTransportation: string;
    images: [];
}