import { Options } from 'sequelize';
import 'dotenv/config';

const config: Options = {
  database: 'TODO_LIST_FULLTACK',
  dialect: 'mysql',
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: Number(process.env.DB_PORT),
  username: process.env.USER,
};

module.exports = config;
