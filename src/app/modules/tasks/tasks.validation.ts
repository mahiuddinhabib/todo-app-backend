import { z } from 'zod';
import { taskStatus } from './tasks.constant';

const addTaskZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(3)
      .max(50),
    description: z.string().min(3).max(500).optional(),
    status: z.enum([...taskStatus] as [string, ...string[]]).optional(),
    dueDate: z.string().optional(),
  }),
});

const updateTaskZodSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(50).optional(),
    description: z.string().min(3).max(500).optional(),
    status: z.enum([...taskStatus] as [string, ...string[]]).optional(),
    dueDate: z.string().optional(),
  }),
});

export const TaskValidation = {
  addTaskZodSchema,
  updateTaskZodSchema,
};
