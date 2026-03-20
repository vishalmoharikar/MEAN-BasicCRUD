import { Schema, model, Document } from 'mongoose';



export interface ITask extends Document {
    title: string;
    status: string;
}

const TaskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    status: { type: String, default: 'Pending' }
});

export const Task = model<ITask>('Task', TaskSchema);