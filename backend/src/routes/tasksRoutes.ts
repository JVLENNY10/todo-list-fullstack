import { Router } from 'express';
import TasksControllers from '../controllers/TasksControllers';

const routes = Router();
const tasksControllers = new TasksControllers();

const { testController } = tasksControllers;

routes.get('/', testController);

export default routes;
