import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TaskController } from './tasks.controller';
import { TaskValidation } from './tasks.validation';

const router = express.Router();

// Routes
router.get('/', TaskController.getAllTasks);

router.post(
  '/',
  validateRequest(TaskValidation.addTaskZodSchema),
  TaskController.addTask
);

router.get('/:id', TaskController.getSingleTask);

router.put(
  '/:id',
  validateRequest(TaskValidation.updateTaskZodSchema),
  TaskController.updateTask
);

router.delete('/:id', TaskController.deleteTask);

export const TasksRoutes = router;
