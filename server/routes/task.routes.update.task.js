const express = require('express');
const router = express.Router();
const { updateTask } = require('../controllers/task.update.controller');

// router.post('/delete-task', deleteTask);
router.put ('/update-task/:id', updateTask);
module.exports = router;