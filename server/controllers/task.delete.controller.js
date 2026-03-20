const Task = require('../models/task.model');


exports.deleteTask = async (req, res) => {
    try {
        // We get the ID from the URL params: req.params.id
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};