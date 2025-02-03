import express from 'express';
import Stock from '../controller/Stock.js';

const router = express.Router();
const { createStock, getDetailsOfStockById, getAllStockDetails, deleteStockById, modifyStockDetailsById } = new Stock();

router.post('/createStock', createStock);
router.get('/getAllStock', getAllStockDetails);
router.get('/getStock', getDetailsOfStockById);
router.delete('/removerStock', deleteStockById);
router.put('/modifyStock', modifyStockDetailsById);

export default router;