import { Router } from 'express';
import TasksControllers from '../controllers/TasksControllers';

const routes = Router();
const tasksControllers = new TasksControllers();

const { create, destroy, findAll } = tasksControllers;

routes.get('/', findAll);
routes.post('/', create);
routes.delete('/:id', destroy);

export default routes;
