const express = require('express');
const router = express.Router();
const { deleteTask } = require('../controllers/task.delete.controller');

// router.post('/delete-task', deleteTask);
router.delete('/delete-task/:id', deleteTask);
module.exports = router;