import express from 'express';
import Issue from '../controller/Issue.js';

const router = express.Router();
const { createIssue, deleteIssueById, getAllIssueDetails, getDetailsOfIssueById, modifyIssueDetailsById } = new Issue();

router.post('/createIssue', createIssue);
router.get('/getAllIssue', getAllIssueDetails);
router.get('/getIssue', getDetailsOfIssueById);
router.delete('/removerIssue', deleteIssueById);
router.put('/modifyIssue', modifyIssueDetailsById);

export default router;