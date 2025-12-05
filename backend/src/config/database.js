const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'newsletter',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'PASSWORD',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: console.log,
  }
);

module.exports = sequelize;