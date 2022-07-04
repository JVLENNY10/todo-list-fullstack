import { Router } from 'express';
import TasksControllers from '../controllers/TasksControllers';

const routes = Router();
const tasksControllers = new TasksControllers();

const { create, findAll } = tasksControllers;

routes.get('/', findAll);
routes.post('/', create);

export default routes;
