// Import express
import express from "express";

// Import Country Controller
import { 
    getCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
} from "../controllers/Country.js";

// Import Fauna Controller
import { 
    getFaunas,
    getFaunaById,
    createFauna,
    updateFauna,
    deleteFauna
 } from "../controllers/Fauna.js";

 // Import Flora Controller
import { 
    getFloras,
    getFloraById,
    createFlora,
    updateFlora,
    deleteFlora
 } from "../controllers/Flora.js";

// Import Mountain Controller
import { 
    getMountains,
    getMountainById,
    createMountain,
    updateMountain,
    deleteMountain
 } from "../controllers/Mountain.js";

 // Import Region Controller
import { 
    getRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion
 } from "../controllers/Region.js";

 // Import Type Controller
import { 
    getTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
 } from "../controllers/Type.js";

 // Init express router
const router = express.Router();


router.get('/api/countries', getCountries);
router.get('/api/countries/:id', getCountryById);
router.post('/api/countries', createCountry);
router.put('/api/countries/:id', updateCountry);
router.delete('/api/countries/:id', deleteCountry);

router.get('/api/faunas', getFaunas);
router.get('/api/faunas/:id', getFaunaById);
router.post('/api/faunas', createFauna);
router.put('/api/faunas/:id', updateFauna);
router.delete('/api/faunas/:id', deleteFauna);

router.get('/api/floras', getFloras);
router.get('/api/floras/:id', getFloraById);
router.post('/api/floras', createFlora);
router.put('/api/floras/:id', updateFlora);
router.delete('/api/floras/:id', deleteFlora);

router.get('/api/mountains', getMountains);
router.get('/api/mountains/:id', getMountainById);
router.post('/api/mountains', createMountain);
router.put('/api/mountains/:id', updateMountain);
router.delete('/api/mountains/:id', deleteMountain);

router.get('/api/regions', getRegions);
router.get('/api/regions/:id', getRegionById);
router.post('/api/regions', createRegion);
router.put('/api/regions/:id', updateRegion);
router.delete('/api/regions/:id', deleteRegion);

router.get('/api/types', getTypes);
router.get('/api/types/:id', getTypeById);
router.post('/api/types', createType);
router.put('/api/types/:id', updateType);
router.delete('/api/types/:id', deleteType);

// export router
export default router;