import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Location = new Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        }
    }
);

export default mongoose.model('Location', Location, 'locations');