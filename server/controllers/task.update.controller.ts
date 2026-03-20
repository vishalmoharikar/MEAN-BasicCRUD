import type { Request, Response } from 'express';
import { Task } from '../models/task.model.js';

export const updateTask = async (req: Request, res: Response) => {
    try {
        // We get the ID from the URL params: req.params.id
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updateTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updateTask);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};