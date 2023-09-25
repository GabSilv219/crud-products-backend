import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize('db_products_teste', 'db_products_teste_user', 'IP1zqrscegSY8tHcO8E2ptW3fD4jES4z', {
    host: 'dpg-ck8hh3nq54js73dbhij0-a',
    dialect: 'postgres'
  });

  export default sequelize;