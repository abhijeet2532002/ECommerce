import express from 'express';
import Issue from './Issue.js';  // Keep this one
import User from './User.js';
import Order from './Order.js';
import Rating from './Rating.js';
import Wishlist from './Wishlist.js';
import Cart from './Cart.js';
import Stock from './Stock.js';
import Product from './Product.js';
import DeliveryPartner from './DeliveryPartner.js';
import Category from './Category.js';
import SupportAgent from './SupportAgent.js';
import Middleware from '../config/MiddleWare.js';

const router = express.Router();
const { Auth } = new Middleware();

router.use('/User', User);
router.use('/Issue',Auth, Issue);
router.use('/Order',Auth, Order);
router.use('/Rating',Auth, Rating);
router.use('/Wishlist',Auth, Wishlist);
router.use('/Cart',Auth, Cart);
router.use('/Stock',Auth, Stock);
router.use('/Product',Auth, Product);
router.use('/DeliveryPartner',Auth, DeliveryPartner);
router.use('/Category',Auth, Category);
router.use('/supportAgent',Auth, SupportAgent);

export default router;