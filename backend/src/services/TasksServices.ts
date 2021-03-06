import Task from '../database/models/Task';

class TasksServices {
  public create = async (newTask: string) => {
    const task = await Task.create({ task: newTask, inProgress: false });
    return task;
  }

  public destroy = async (id: string) => {
    await Task.destroy({ where: { id } });
  }

  public findAll = async () => {
    const tasks = await Task.findAll({ attributes: { exclude: ['id'] } });
    return tasks.sort();
  };

  public update = async (id: string, updateProgress: string) => {
    await Task.update({ progress: updateProgress }, { where: { id } });
  }
}

export default TasksServices;
