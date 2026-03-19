const Task = require('../models/task.model');

// @desc    Get first task
// @route   GET /api/first-task
exports.getFirstTask = async (req, res) => {
    try {
        const task = await Task.findOne();
        res.json(task || { title: "No task found!" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};