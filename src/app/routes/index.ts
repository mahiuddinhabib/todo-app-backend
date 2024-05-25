import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { TasksRoutes } from '../modules/tasks/tasks.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/tasks',
    route: TasksRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
