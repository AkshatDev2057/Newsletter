const sequelize = require('../config/database');
const { NewsSection, NewsItem } = require('./associations');

const db = {
  sequelize,
  Sequelize: require('sequelize'),
  NewsSection,
  NewsItem,
};

module.exports = db;