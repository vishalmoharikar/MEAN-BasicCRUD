const express = require('express');
const router = express.Router();
const { getFirstTask } = require('../controllers/task.controller');

router.get('/first-task', getFirstTask);

module.exports = router;