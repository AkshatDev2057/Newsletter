const { NewsSection, NewsItem } = require('../models');

const getAllSections = async () => {
  const sections = await NewsSection.findAll({
    include: [{
      model: NewsItem,
      as: 'newsItems',
      attributes: ['id'],
    }],
  });
  return sections.map(section => ({
    ...section.toJSON(),
    newsItemsCount: section.newsItems.length,
  }));
};

const getSectionById = async (id) => {
  return await NewsSection.findByPk(id, {
    include: [{
      model: NewsItem,
      as: 'newsItems',
    }],
  });
};

const createSection = async (data) => {
  return await NewsSection.create(data);
};

const updateSection = async (id, data) => {
  const section = await NewsSection.findByPk(id);
  if (!section) throw new Error('Section not found');
  return await section.update(data);
};

const deleteSection = async (id) => {
  const section = await NewsSection.findByPk(id);
  if (!section) throw new Error('Section not found');
  return await section.destroy();
};

module.exports = {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
};