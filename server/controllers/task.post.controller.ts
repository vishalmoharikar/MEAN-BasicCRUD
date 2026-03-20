import type { Request, Response } from 'express';
import { Task } from '../models/task.model.js';

export const createTask = async (req: Request, res: Response) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error: any
    ) {
        res.status(400).json({ message: error.message });
    }
};