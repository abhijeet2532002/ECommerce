import express from 'express';
import Seller from '../controller/Seller.js';

const router = express.Router();
const { createBusiness, getDetailsOfBusinessById, getAllBusinessDetails, deleteBusinessById, modifyBusinessDetailsById } = new Seller();

router.post('/createBusiness', createBusiness);
router.get('/getAllBusiness', getAllBusinessDetails);
router.get('/getBusiness', getDetailsOfBusinessById);
router.delete('/removerBusiness', deleteBusinessById);
router.put('/modifyBusiness', modifyBusinessDetailsById);

export default router;