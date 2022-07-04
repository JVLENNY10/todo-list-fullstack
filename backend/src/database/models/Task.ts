import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  public id?: number;
  public task!: string;
  public inProgress!: boolean;
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
    inProgress: DataTypes.BOOLEAN
  },
  {
    modelName: 'task',
    sequelize: db,
    timestamps: false,
  },
);

export default Task;
