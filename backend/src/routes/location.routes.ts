import express from 'express';
import { LocationController } from '../controllers/location.controller';

const locationRouter = express.Router();

//greska je bila sto sam kao rutu stavio register_agency u copypasta
locationRouter.route('/add_location').post(
    (req, res)=> new LocationController().add_location(req, res)
)


locationRouter.route('/remove_location').post(
    (req, res)=> new LocationController().remove_location(req, res)
)

locationRouter.route('/getAllMunicipalities').post(
    (req, res)=> new LocationController().getAllMunicipalities(req, res)
)



export default locationRouter;