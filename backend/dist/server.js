"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const agency_routes_1 = __importDefault(require("./routes/agency.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const userType_routes_1 = __importDefault(require("./routes/userType.routes"));
const realEstateCity_routes_1 = __importDefault(require("./routes/realEstateCity.routes"));
const microlocation_routes_1 = __importDefault(require("./routes/microlocation.routes"));
const realEstateType_routes_1 = __importDefault(require("./routes/realEstateType.routes"));
const realEstate_routes_1 = __importDefault(require("./routes/realEstate.routes"));
const location_routes_1 = __importDefault(require("./routes/location.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/prodajaNekretnina');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Connection OK');
});
const router = express_1.default.Router();
router.use('/agencies', agency_routes_1.default);
router.use('/locations', location_routes_1.default);
router.use('/microlocations', microlocation_routes_1.default);
router.use('/realEstates', realEstate_routes_1.default);
router.use('/realEstateCities', realEstateCity_routes_1.default);
router.use('/realEstateTypes', realEstateType_routes_1.default);
router.use('/users', user_routes_1.default);
router.use('/userTypes', userType_routes_1.default);
app.use('/', router);
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./images");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
app.post('/uploadImage', upload.single('image'), (req, res) => { });
app.use(express_1.default.static('images'));
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map