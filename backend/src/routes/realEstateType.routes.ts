import express from 'express';
import { RealEstateTypeController } from '../controllers/realEstateType.controller';

const realEstateTypeRouter = express.Router();

realEstateTypeRouter.route('/getAllRealEstateTypes').get(
    (req, res) => new RealEstateTypeController().getAllRealEstateTypes(req, res)
);

export default realEstateTypeRouter;