import express from 'express';
import Rating from '../controller/Rating.js';

const router = express.Router();
const { createRating, getAllRatingDetails, getDetailsOfRatingById, modifyRatingDetailsById, deleteRatingById } = new Rating();

router.post('/createRating', createRating);
router.get('/getAllRating', getAllRatingDetails);
router.get('/getRating', getDetailsOfRatingById);
router.delete('/removerRating', deleteRatingById);
router.put('/modifyRating', modifyRatingDetailsById);

export default router;