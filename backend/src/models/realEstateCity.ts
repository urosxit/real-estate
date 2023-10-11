import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RealEstateCity = new Schema(
    {
        id: {
            type: Number
        },
        city: {
            type: String
        },
        municipality: {
            type: String
        },
        microlocation: {
            type: String
        }
    }
);

export default mongoose.model('RealEstateCity', RealEstateCity, 'realEstateCities');