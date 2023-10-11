import express from 'express';
import { RealEstateCityController } from '../controllers/realEstateCity.controller';

const realEstateCityRouter = express.Router();

realEstateCityRouter.route('/getAllRealEstateCities').get(
    (req, res) => new RealEstateCityController().getAllRealEstateCities(req, res)
);

export default realEstateCityRouter;