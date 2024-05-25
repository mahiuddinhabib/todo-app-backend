import { Schema, model } from 'mongoose';
import { taskStatus } from './tasks.constant';
import { ITask, TaskModel } from './tasks.interface';

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      required: true,
      enum: taskStatus,
      default: 'pending',
    },
    dueDate: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Task = model<ITask, TaskModel>('Task', taskSchema);
