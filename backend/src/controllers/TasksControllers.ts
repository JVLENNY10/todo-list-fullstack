import { Request, Response } from 'express';
import TasksServices from "../services/TasksServices";

class TasksControllers {
  private tasksServices: TasksServices;

  constructor() {
    this.tasksServices = new TasksServices();
  }

  public testController = (_req: Request, res: Response) => {
    const test = 'Hello, Todo List!';
    return res.status(200).json({ message: test });
  };
}

export default TasksControllers;
