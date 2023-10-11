import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Microlocation = new Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        locationId: {
            type: Number
        },
    }
);

export default mongoose.model('Microlocation', Microlocation, 'microlocations');