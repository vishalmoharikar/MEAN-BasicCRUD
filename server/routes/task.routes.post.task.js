const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/task.post.controller');

router.post('/create-task', createTask);

module.exports = router;