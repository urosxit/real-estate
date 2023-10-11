import express from 'express';
import User from '../models/user';

export class RegisteredUserController {
    logIn = (req: express.Request, res: express.Response) => {
        User.findOne({ 'username': req.body.username, 'password': req.body.password },
            (err, registeredUser) => {
                if (err) console.log('Error when trying to log in user', err);
                else res.json(registeredUser);
            });
    };

    resetPassword = (req: express.Request, res: express.Response) => {
        User.findOne({ 'username': req.body.username },
            (err, registeredUser) => {
                if (err) {
                    console.log('Error when trying to find user', err);
                    res.json(false)
                }
                else {
                    User.collection.updateOne({ 'username': req.body.username }, { $set: { 'password': req.body.password } });
                    res.json(true);
                }
            });
    };

    getUser = (req: express.Request, res: express.Response) => {
        User.findOne({ 'username': req.body.username },
            (err, registeredUser) => {
                if (err) {
                    console.log('Error when trying to fetch user', err);
                    res.json(null);
                }
                else res.json(registeredUser);
            });
    };

    getUserByUsername = async (req: express.Request, res: express.Response) => {
        await User.findOne({ 'username': req.body.username },
            (err, registeredUser) => {
                if (err) {
                    console.log('Error when trying to fetch in user', err);
                    res.json(null);
                }
                else res.json(registeredUser);
            }).exec();
    };

    canRegisterUser = async (req: express.Request, res: express.Response) => {
        var userExists = '';
        await User.findOne({ 'username': req.body.username },
            (err, registeredUser) => {
                if (err) console.log('Error fetching user by username:', err);
                else if (registeredUser) {
                    userExists = 'Korisnik sa unetim korisničkim imenom već postoji.';
                }
            }).exec();

        await User.findOne({ 'email': req.body.email },
            (err, registeredUser) => {
                if (err) console.log('Error fetching user by email:', err);
                else if (registeredUser) {
                    userExists += 'Korisnik sa unetim mejlom već postoji.';
                    console.log(userExists);
                }
                res.json(userExists);
            }).exec();
    };

    register = (req: express.Request, res: express.Response) => {
        User.collection.insertOne({
            'username': req.body.username,
            'password': req.body.password,
            'email': req.body.email,
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'birthDate': req.body.birthDate,
            'city': req.body.city,
            'phoneNumber': req.body.phoneNumber,
            'agency': req.body.agency,
            'licenseNo': req.body.licenseNo,
            'profileImage': req.body.profileImage,
            'userType': req.body.userType,
            'waitingApproval': true,
            'denied': false
        },
            (err, createdUser) => {
                if (err) {
                    console.log('Error creating user:', err);
                    res.json(false);
                }
                else if (createdUser) {
                    res.json(true);
                }
            });
    };

    getAllUsers = async (req: express.Request, res: express.Response) => {
        await User.find({},
            (err, users) => {
                if (err) {
                    console.log('Error when trying to fetch users', err);
                    res.json(null);
                }
                else res.json(users);
            }).exec();
    };

    getUsersWaitingForApproval = async (req: express.Request, res: express.Response) => {
        await User.find({ 'waitingApproval': true },
            (err, users) => {
                if (err) {
                    console.log('Error when trying to fetch users', err);
                    res.json(null);
                }
                else res.json(users);
            }).exec();
    };

    approveUser = (req: express.Request, res: express.Response) => {
        User.updateOne({ 'username': req.body.username }, { $set: { 'waitingApproval': false } },
            (err, result) => {
                if (err) {
                    console.log('Error when trying to update user', err);
                    res.json(null);
                }
                else res.json(result);
            });
    };

    editUser = (req: express.Request, res: express.Response) => {
        User.updateOne({ 'id': req.body.id }, { $set: { 'waitingApproval': false } },
            (err, result) => {
                if (err) {
                    console.log('Error when trying to update user', err);
                    res.json(null);
                }
                else res.json(result);
            });
    };

    rejectUser = (req: express.Request, res: express.Response) => {
        User.updateOne({ 'username': req.body.username }, { $set: { 'waitingApproval': false, 'denied': true } },
            (err, result) => {
                if (err) {
                    console.log('Error when trying to update user', err);
                    res.json(null);
                }
                else res.json(result);
            });
    };

    deleteUser = (req: express.Request, res: express.Response) => {
        console.log('delete');
        User.deleteOne({ 'username': req.body.username },
            (err) => {
                if (err) {
                    console.log('Error when trying to delete user', err);
                    res.json(null);
                }
                else res.json('User was successfully deleted');
            });
    };
}
