import express from 'express';
import Product from '../controller/Product.js';

const router = express.Router();
const { createProduct, getDetailsOfProductById, getAllProductDetails, deleteProductById, modifyProductDetailsById } = new Product();

router.post('/createProduct', createProduct);
router.get('/getAllProduct', getAllProductDetails);
router.get('/getProduct', getDetailsOfProductById);
router.delete('/removerProduct', deleteProductById);
router.put('/modifyProduct', modifyProductDetailsById);

export default router;