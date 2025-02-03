import express from 'express';
import Wishlist from '../controller/Wishlist.js';

const router = express.Router();
const { createWishlist, getAllWishlistDetails, getDetailsOfWishlistById, deleteWishlistById, modifyWishlistDetailsById } = new Wishlist();

router.post('/createWishlist', createWishlist);
router.get('/getAllWishlist', getAllWishlistDetails);
router.get('/getWishlist', getDetailsOfWishlistById);
router.delete('/removerWishlist', deleteWishlistById);
router.put('/modifyWishlist', modifyWishlistDetailsById);

export default router;