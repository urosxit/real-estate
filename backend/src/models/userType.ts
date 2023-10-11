import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let UserType = new Schema(
    {
        id: {
            type: Number
        },
        description: {
            type: String
        }
    }
);

export default mongoose.model('UserType', UserType, 'userTypes');