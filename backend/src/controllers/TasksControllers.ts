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
  
  public destroy = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.tasksServices.destroy(id);
    return res.status(200).json({ message: 'Removido com sucesso!' });
  }

  public findAll = async (_req: Request, res: Response) => {
    const tasks = await this.tasksServices.findAll();
    return res.status(200).json(tasks);
  };

  public update = async (req: Request, res: Response) => {
    const { id, updateTask } = req.body;
    const task = await this.tasksServices.update(id, updateTask);
    return res.status(200).json({ message: 'Atualizado com sucesso!' });
  }
}

export default TasksControllers;
