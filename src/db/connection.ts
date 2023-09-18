import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize('railway', 'postgres', 'M6G8wA3LjrvOMwOwxHM1', {
    host: 'containers-us-west-77.railway.app',
    dialect: 'postgres'
  });

  export default sequelize;