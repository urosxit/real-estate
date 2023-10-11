import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import agencyRouter from './routes/agency.routes';
import userRouter from './routes/user.routes';
import userTypesRouter from './routes/userType.routes';
import realEstateCityRouter from './routes/realEstateCity.routes';
import microlocationRouter from './routes/microlocation.routes';
import realEstateTypeRouter from './routes/realEstateType.routes';
import realEstateRouter from './routes/realEstate.routes';
import locationRouter from './routes/location.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/prodajaNekretnina');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection OK');
});

const router = express.Router();
router.use('/agencies', agencyRouter);
router.use('/locations', locationRouter);
router.use('/microlocations', microlocationRouter);
router.use('/realEstates', realEstateRouter);
router.use('/realEstateCities', realEstateCityRouter);
router.use('/realEstateTypes', realEstateTypeRouter);
router.use('/users', userRouter);
router.use('/userTypes', userTypesRouter);

app.use('/', router);

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req: any, file: any, callback: (arg0: any, arg1: string) => void) => {
        callback(null, "./images");
    },
    filename: (req: any, file: { originalname: any; }, callback: (arg0: any, arg1: any) => void) => {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
app.post('/uploadImage', upload.single('image'), (req, res) => { });
app.use(express.static('images'));
app.listen(4000, () => console.log(`Express server running on port 4000`));
