import express from 'express';
const router = express.Router();
import { getFirstTask, getAllTasks } from '../controllers/task.controller.js';

router.get('/first-task', getFirstTask);
router.get('/get-all-tasks', getAllTasks)

export default router;