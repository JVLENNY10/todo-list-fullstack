import Task from '../database/models/Task';

class TasksServices {
  public findAll = async () => {
    const tasks = await Task.findAll({ attributes: { exclude: ['id'] } });
    return tasks;
  };
}

export default TasksServices;
