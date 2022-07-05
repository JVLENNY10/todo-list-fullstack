import { Router } from 'express';
import TasksControllers from '../controllers/TasksControllers';

const routes = Router();
const tasksControllers = new TasksControllers();

const { create, destroy, findAll, update } = tasksControllers;

routes.get('/', findAll);
routes.post('/', create);
routes.delete('/:id', destroy);
routes.patch('/', update);

export default routes;
