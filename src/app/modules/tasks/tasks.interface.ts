import { Model } from "mongoose";

export type ITaskStatus = 'pending' | 'in_progress' | 'completed';

export type ITask = {
  title: string;
  description: string;
  status: ITaskStatus;
  dueDate: string;
};

export type TaskModel = Model<ITask, Record<string, unknown>>;

export type ITaskFilters = {
  searchTerm?: string;
  id?: string;
  title?: string;
  status?: ITaskStatus;
  dueDate?: string;
};
