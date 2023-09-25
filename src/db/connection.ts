import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize('railway', 'postgres', 'HsDO8bYp2FCTw3CQDkKf', {
    host: 'containers-us-west-155.railway.app',
    dialect: 'postgres'
  });

  export default sequelize;