import { Options } from 'sequelize';
import 'dotenv/config';

const config: Options = {
  database: process.env.DB_NAME,
  dialect: 'mysql',
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
};

module.exports = config;
