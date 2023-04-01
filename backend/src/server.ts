import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes';
import agencyRouter from './routes/agency.routes';
import locationRouter from './routes/location.routes';


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/nekretnine");
const conn = mongoose.connection;
conn.once('open', ()=>{
    console.log("Konekcija sa bazom je uspesna");
})

const router = express.Router();
router.use('/user', userRouter );
router.use('/agency', agencyRouter);
router.use('/location', locationRouter);

//router.use('/proizvodi', proizvodiRouter );

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));