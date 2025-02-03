import express from 'express';
import Order from '../controller/Order.js';

const router = express.Router();
const { placeOrder, getAllOrderDetails, getDetailsOfOrderById, deleteOrderById, modifyOrderDetailsById } = new Order();

router.post('/createOrder', placeOrder);
router.get('/getAllOrder', getAllOrderDetails);
router.get('/getOrder', getDetailsOfOrderById);
router.delete('/removerOrder', deleteOrderById);
router.put('/modifyOrder', modifyOrderDetailsById);

export default router;