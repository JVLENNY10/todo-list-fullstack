import { Request, Response } from 'express';
import TasksServices from "../services/TasksServices";

class TasksControllers {
  private tasksServices: TasksServices;

  constructor() {
    this.tasksServices = new TasksServices();
  }

  public create = async (req: Request, res: Response) => {
    const { newTask } = req.body;
    const task = await this.tasksServices.create(newTask);
    return res.status(201).json(task);
  }

  public findAll = async (_req: Request, res: Response) => {
    const tasks = await this.tasksServices.findAll();
    return res.status(200).json(tasks);
  };
}

export default TasksControllers;
