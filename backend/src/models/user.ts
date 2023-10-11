import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        id: {
            type: Number
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        birthDate: {
            type: String
        },
        city: {
            type: Number
        },
        phoneNumber: {
            type: String
        },
        agency: {
            type: Number
        },
        licenseNo: {
            type: String
        },
        profileImage: {
            type: String
        },
        userType: {
            type: Number
        },
        waitingApproval: {
            type: Boolean
        },
        denied: {
            type: Boolean
        }
    }
);

export default mongoose.model('User', User, 'users');