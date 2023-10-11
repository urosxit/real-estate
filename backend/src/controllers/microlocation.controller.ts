import express from 'express';
import Microlocation from '../models/microlocation';

export class MicrolocationController {
    getAllMicrolocations = async (req: express.Request, res: express.Response) => {
        await Microlocation.find({}, (err, microlocations) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(microlocations);
            }
        }).exec();
    };
}
