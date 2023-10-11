import express from 'express';
import Location from '../models/location';

export class LocationController {
    getAllLocations = async (req: express.Request, res: express.Response) => {
        await Location.find({}, (err, locations) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(locations);
            }
        }).exec();
    };
}
