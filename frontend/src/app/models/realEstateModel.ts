import { RealEstate } from "./realEstate";
import { UserModel } from "./userModel";

export class RealEstateModel {
    realEstate: RealEstate;
    addedBy: UserModel;
    locationName: string;
    microlocationName: string;
    realEstateTypeString: string;
    showAdvertiserData: boolean;
    randomImage: string;
    firstImage: string;
    images: [];
}