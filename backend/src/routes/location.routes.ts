import express from 'express';
import { LocationController } from '../controllers/location.controller';

const locationRouter = express.Router();

locationRouter.route('/getAllLocations').get(
    (req, res) => new LocationController().getAllLocations(req, res)
);

export default locationRouter;