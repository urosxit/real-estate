import express from 'express';
import UserType from '../models/userType';

export class UserTypeController {
    getAllUserTypes = (req: express.Request, res: express.Response) => {
        UserType.find({}, (err, types) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(types);
            }
        });
    };
}