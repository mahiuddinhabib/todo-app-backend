import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { taskFilterableFields } from './tasks.constant';
import { TaskService } from './tasks.service';

const addTask: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await TaskService.addTask(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Task created successfully',
      data: result,
    });
  }
);

const getAllTasks: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, taskFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await TaskService.getAllTasks(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tasks fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleTask: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await TaskService.getSingleTask(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Task fetched successfully',
      data: result,
    });
  }
);

const updateTask: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await TaskService.updateTask(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Task updated successfully',
      data: result,
    });
  }
);

const deleteTask: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await TaskService.deleteTask(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Task deleted successfully',
      data: result,
    });
  }
);

export const TaskController = {
  addTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
