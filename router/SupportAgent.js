import express from 'express';
import SupportAgent from '../controller/SupportAgent.js';
import MiddleWare from '../config/MiddleWare.js';

const router = express.Router();
const {
    createSupportAgent,
    getDetailsOfSupportAgentById,
    getAllSupportAgentDetails,
    deleteSupportAgentById,
    modifySupportAgentDetailsById
} = new SupportAgent();
const { validatePhone } = new MiddleWare();

router.post('/createSupportAgent', validatePhone, createSupportAgent);
router.get('/getAllSupportAgent', getAllSupportAgentDetails);
router.get('/getSupportAgent', getDetailsOfSupportAgentById);
router.delete('/removerSupportAgent', deleteSupportAgentById);
router.put('/modifySupportAgent', modifySupportAgentDetailsById);

export default router;