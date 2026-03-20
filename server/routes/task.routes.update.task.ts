import { Router } from 'express';
// Note: Even though the file is .ts, ESM requires .js in the import path
import { updateTask } from '../controllers/task.update.controller.js';

const router: Router = Router();

// router.post('/delete-task', deleteTask);
router.put('/update-task/:id', updateTask);

export default router;