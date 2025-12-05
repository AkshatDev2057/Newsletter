const NewsSection = require('./NewsSection');
const NewsItem = require('./NewsItem');

NewsSection.hasMany(NewsItem, { foreignKey: 'section_id', as: 'newsItems' });
NewsItem.belongsTo(NewsSection, { foreignKey: 'section_id', as: 'newsSection' });

module.exports = { NewsSection, NewsItem };