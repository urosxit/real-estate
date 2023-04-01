import express from 'express';
import agency from '../models/agency';
import { AgencyController } from '../controllers/agency.controller';

const agencyRouter = express.Router();

/*agencyRouter.route('/register_agency').post(
    (req, res)=> new AgencyController().register_agency(req, res)
)*/

//greska je bila sto sam kao rutu stavio register_agency u copypasta
agencyRouter.route('/find_agency').post(
    (req, res)=> new AgencyController().find_agency(req, res)
)


agencyRouter.route('/register_agency').post(
    (req, res)=> new AgencyController().register_agency(req, res)
)

agencyRouter.route('/getAllAgencies').post(
    (req, res)=> new AgencyController().getAllAgencies(req, res)
)



export default agencyRouter;