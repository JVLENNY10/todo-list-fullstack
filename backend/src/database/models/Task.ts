import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  public id?: number;

  public task: string = '';
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
  },
  {
    modelName: 'task',
    sequelize: db,
    timestamps: false,
    underscored: true,
  },
);

export default Task;
