import express from 'express';

const router = express.Router();
import { deleteTask } from '../controllers/task.delete.controller.js';


router.delete('/delete-task/:id', deleteTask);
export default router;