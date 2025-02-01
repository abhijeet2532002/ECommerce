import express from 'express';
import Cart from '../controller/Cart.js';
const router = express.Router();
const { createCart, deleteCartById, getAllCartDetails, getDetailsOfCartById, modifyCartDetailsById } = new Cart();
router.post('/createCart', createCart);
router.get('/getAllCart', getAllCartDetails);
router.get('/getCart', getDetailsOfCartById);
router.delete('/removerCart', deleteCartById);
router.put('/modifyCart', modifyCartDetailsById);

export default router;