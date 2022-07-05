import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  public id?: number;
  public task!: string;
  public progress!: string;
}

Task.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    task: DataTypes.STRING,
    progress: DataTypes.STRING
  },
  {
    modelName: 'task',
    sequelize: db,
    timestamps: true,
  },
);

export default Task;
