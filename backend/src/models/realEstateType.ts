import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RealEstateType = new Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        }
    }
);

export default mongoose.model('RealEstateType', RealEstateType, 'realEstateType');