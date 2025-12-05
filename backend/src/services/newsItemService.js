const { NewsItem, NewsSection } = require('../models');

const getAllItems = async (sectionId) => {
  const where = sectionId ? { section_id: sectionId } : {};
  return await NewsItem.findAll({
    where,
    include: [{
      model: NewsSection,
      as: 'newsSection',
      attributes: ['id', 'title'],
    }],
  });
};

const getItemById = async (id) => {
  return await NewsItem.findByPk(id, {
    include: [{
      model: NewsSection,
      as: 'newsSection',
    }],
  });
};

const createItem = async (data) => {
  return await NewsItem.create(data);
};

const updateItem = async (id, data) => {
  const item = await NewsItem.findByPk(id);
  if (!item) throw new Error('News item not found');
  return await item.update(data);
};

const deleteItem = async (id) => {
  const item = await NewsItem.findByPk(id);
  if (!item) throw new Error('News item not found');
  return await item.destroy();
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};