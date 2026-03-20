const express = require('express');
const router = express.Router();
const { getFirstTask, getAllTasks } = require('../controllers/task.controller');

router.get('/first-task', getFirstTask);
router.get('/get-all-tasks', getAllTasks)

module.exports = router;