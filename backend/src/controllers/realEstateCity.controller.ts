import express from 'express';
import RealEstateCity from '../models/realEstateCity';

export class RealEstateCityController {
    getAllRealEstateCities = (req: express.Request, res: express.Response) => {
        RealEstateCity.find({}, (err, cities) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(cities);
            }
        });
    };
}
