import Task from '../database/models/Task';

class TasksServices {
  public create = async (newTask: string) => {
    const task = await Task.create({ task: newTask, inProgress: false });
    return task;
  }

  public findAll = async () => {
    const tasks = await Task.findAll({ attributes: { exclude: ['id'] } });
    return tasks;
  };
}

export default TasksServices;
