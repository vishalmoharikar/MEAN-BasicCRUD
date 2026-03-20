


import { Router } from 'express';
import { createTask } from '../controllers/task.post.controller.js';

const router: Router = Router();

router.post('/create-task', createTask);

export default router;