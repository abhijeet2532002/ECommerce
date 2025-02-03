import express from 'express';
import User from '../controller/User.js';
import MiddleWare from '../config/MiddleWare.js';

const router = express.Router();
const { register,
    login, updateUserByEmail,
    logout,
    getProfile, getAllUser, deleteUserByEmail } = new User();
const { Auth } = new MiddleWare();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', Auth, logout);
router.get('/getAllUser', Auth, getAllUser);
router.get('/profile', Auth, getProfile);
router.delete('/removeUser/:email', Auth, deleteUserByEmail);
router.put('/modify/:email', Auth, updateUserByEmail);

export default router;