import express from 'express';
import Category from '../controller/Category.js';

const router = express.Router();
const { createCategory, getDetailsOfCategoryById, getAllCategoryDetails, deleteCategoryById, modifyCategoryDetailsById } = new Category();

router.post('/createCategory', createCategory);
router.get('/getAllCategory', getAllCategoryDetails);
router.get('/getCategory', getDetailsOfCategoryById);
router.delete('/removerCategory', deleteCategoryById);
router.put('/modifyCategory', modifyCategoryDetailsById);

export default router;