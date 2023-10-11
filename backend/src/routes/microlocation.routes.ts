import express from 'express';
import { MicrolocationController } from '../controllers/microlocation.controller';

const microlocationRouter = express.Router();

microlocationRouter.route('/getAllMicrolocations').get(
    (req, res) => new MicrolocationController().getAllMicrolocations(req, res)
);

export default microlocationRouter;