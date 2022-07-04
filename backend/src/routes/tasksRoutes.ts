import { Router } from 'express';
import TasksControllers from '../controllers/TasksControllers';

const routes = Router();
const tasksControllers = new TasksControllers();

const { findAll } = tasksControllers;

routes.get('/', findAll);

export default routes;
