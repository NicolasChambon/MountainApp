// Import express
import express from "express";

// Import Mountain Controller
import { 
    getMountains,
    getMountainById,
    createMountain,
    updateMountain,
    deleteMountain
 } from "../controllers/Mountain.js";

 // Init express router
const router = express.Router();

// Route get all mountains
router.get('/mountains', getMountains);
// Route get mountain by id
router.get('/mountains/:id', getMountainById);
// Route create a new mountain
router.post('/mountains', createMountain);
// Route update mountain by id
router.put('/mountains/:id', updateMountain);
// Route delete mountain by id
router.delete('/mountains/:id', deleteMountain);

// export router
export default router;