import express from 'express';
import RealEstateType from '../models/realEstateType';

export class RealEstateTypeController {
    getAllRealEstateTypes = async (req: express.Request, res: express.Response) => {
        await RealEstateType.find({}, (err, types) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(types);
            }
        }).exec();
    };
}
