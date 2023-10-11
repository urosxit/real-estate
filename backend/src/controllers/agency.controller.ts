import express from 'express';
import Agency from '../models/agency';

export class AgencyController {
    getAllAgencies = (req: express.Request, res: express.Response) => {
        Agency.find({}, (err, agencies) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(agencies);
            }
        });
    };

    addNewAgency = (req: express.Request, res: express.Response) => {
        Agency.collection.insertOne({
            'name': req.body.name,
            'locationId': req.body.locationId,
            'address': req.body.address,
            'phoneNumber': req.body.phoneNumber,
            'pib': req.body.pib
        }, (err, agency) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(agency);
            }
        });
    };
}
