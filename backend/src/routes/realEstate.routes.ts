import express from 'express';
import { RealEstateController } from '../controllers/realEstate.controller';

const realEstateRouter = express.Router();

realEstateRouter.route('/topFiveRealEstates').get(
    (req, res) => new RealEstateController().topFiveRealEstates(req, res)
);

realEstateRouter.route('/getRealEstateById').post(
    (req, res) => new RealEstateController().getRealEstateById(req, res)
);

realEstateRouter.route('/getFilteredRealEstates').post(
    (req, res) => new RealEstateController().getFilteredRealEstates(req, res)
);

realEstateRouter.route('/getRealEstatesFromAdvertiser').post(
    (req, res) => new RealEstateController().getRealEstatesFromAdvertiser(req, res)
);

realEstateRouter.route('/markEstateAsSold').post(
    (req, res) => new RealEstateController().markEstateAsSold(req, res)
);

realEstateRouter.route('/getAllRealEstates').get(
    (req, res) => new RealEstateController().getAllRealEstates(req, res)
);

realEstateRouter.route('/addNewRealEstate').post(
    (req, res) => new RealEstateController().addNewRealEstate(req, res)
);

realEstateRouter.route('/updateAveragePrice').post(
    (req, res) => new RealEstateController().updateAveragePrice(req, res)
);

export default realEstateRouter;