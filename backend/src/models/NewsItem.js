const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NewsItem = sequelize.define('NewsItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  section_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'news_sections',
      key: 'id',
    },
  },
  headline: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  news_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  event_start_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  event_end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  media_urls: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  source_links: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'news_items',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = NewsItem;