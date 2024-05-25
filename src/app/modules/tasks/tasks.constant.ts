import { ITaskStatus } from "./tasks.interface";

export const taskSearchableFields = ['id', 'title', 'status', 'dueDate'];
export const taskFilterableFields = ['id', 'title', 'status', 'dueDate', 'searchTerm'];

export const taskStatus: ITaskStatus[] = ['pending', 'in_progress', 'completed'];