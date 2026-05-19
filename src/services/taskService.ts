import { Request, Response, NextFunction } from "express";
import { messages } from "../utilities/constants";
import { tasksData } from "../data/tasksData";
import { Task, TaskInput, ApiResponse } from "../entities/task";

let tasks: Task[] = [...tasksData];

export const getTasks = (req: Request, res: Response<ApiResponse<Task[]>>): void => {
  res.status(200).json({ success: true, message: messages.FETCH_SUCCESS, data: tasks });
};

export const createTask = (req: Request<{}, {}, TaskInput>, res: Response<ApiResponse<Task>>, next: NextFunction): void => {
  try {
    const { title, description, priority, status } = req.body;
    if (!title || !priority || !status) throw new Error(messages.INVALID_INPUT);
    const id = Math.max(...tasks.map((t) => t.id)) + 1;
    const newTask: Task = { id, title, description, priority, status };
    tasks.push(newTask);
    res.status(201).json({ success: true, message: messages.CREATE_SUCCESS, data: newTask });
  } catch (err) {
    next(err);
  }
};

export const deleteTask = (req: Request<{ id: string }>, res: Response<ApiResponse<null>>, next: NextFunction): void => {
  try {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === Number(id));
    if (index === -1) throw new Error(messages.NOT_FOUND);

    tasks.splice(index, 1);
    res.status(200).json({ success: true, message: messages.DELETE_SUCCESS });
  } catch (err) {
    next(err);
  }
};
