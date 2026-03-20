import type { Request, Response } from 'express';
import { Task } from "../models/task.model.js";

export const getFirstTask = async (req: Request, res: Response): Promise<void> => {
    try {
        // task will be inferred as ITask | null based on your Model
        const task = await Task.findOne();

        if (!task) {
            res.json({ title: "No task found!" });
            return;
        }

        res.json(task);
    } catch (error: any) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};


export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const task = await Task.find();
        res.json(task || { title: "No task found!" });
    } catch (error:any) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};