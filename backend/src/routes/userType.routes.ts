import express from 'express';
import { UserTypeController } from '../controllers/userType.controller';

const userTypesRouter = express.Router();

userTypesRouter.route('/getAllUserTypes').get(
    (req, res) => new UserTypeController().getAllUserTypes(req, res)
);

export default userTypesRouter;
