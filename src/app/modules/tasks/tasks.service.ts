import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { taskFilterableFields } from './tasks.constant';
import { ITask, ITaskFilters } from './tasks.interface';
import { Task } from './tasks.model';

const addTask = async (data: ITask): Promise<ITask | null> => {
  const task = await Task.create(data);
  return task;
};

const getAllTasks = async (
  filters: ITaskFilters,
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: taskFilterableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Task.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Task.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleTask = async (id: string): Promise<ITask | null> => {
  const task = await Task.findById(id);
  return task;
};

const updateTask = async (
  id: string,
  payload: Partial<ITask>
): Promise<ITask | null> => {
  const isExist = await Task.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found !');
  }

  const result = await Task.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );

  return result;
};

const deleteTask = async (id: string): Promise<ITask | null> => {
  const isExist = await Task.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }

  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskService = {
  addTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};