import express from 'express';
import User from '../controller/User.js';
import MiddleWare from '../config/MiddleWare.js';

const router = express.Router();
const { register,
    login,
    logout,
    getAllUser,
    DeleteUserByEmail,
    modifyUserByEmail } = new User();
const { validatePhone, Auth } = new MiddleWare();

router.post('/register',  register);
router.post('/login', login);
router.get('/logout', Auth, logout);
router.get('/getAllUser', Auth, getAllUser);
router.delete('/removeUser/:email', Auth, DeleteUserByEmail);
router.put('/modify/:email', Auth, modifyUserByEmail);

export default router;