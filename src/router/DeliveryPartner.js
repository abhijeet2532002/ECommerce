import express from 'express';
import DeliveryPartner from '../controller/DeliveryPartner.js';
import MiddleWare from '../config/MiddleWare.js';

const router = express.Router();
const { createDeliveryPartner, getDetailsOfDeliveryPartnerById, getAllDeliveryPartnerDetails, deleteDeliveryPartnerById, modifyDeliveryPartnerDetailsById } = new DeliveryPartner();
const { validatePhone } = new MiddleWare();

router.post('/createDeliveryPartner', validatePhone, createDeliveryPartner);
router.get('/getAllDeliveryPartner', getAllDeliveryPartnerDetails);
router.get('/getDeliveryPartner', getDetailsOfDeliveryPartnerById);
router.delete('/removerDeliveryPartner', deleteDeliveryPartnerById);
router.put('/modifyDeliveryPartner', modifyDeliveryPartnerDetailsById);

export default router;