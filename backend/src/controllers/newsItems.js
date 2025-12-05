const newsItemService = require('../services/newsItemService');

const getAll = async (req, res) => {
  const { sectionId } = req.query;
  const items = await newsItemService.getAllItems(sectionId);
  res.json(items);
};

const getById = async (req, res) => {
  const item = await newsItemService.getItemById(req.params.id);
  if (!item) return res.status(404).json({ error: 'News item not found' });
  res.json(item);
};

const create = async (req, res) => {
  const { section_id, headline, news_date, event_start_date, event_end_date, content, media_urls, source_links } = req.body;
  const item = await newsItemService.createItem({ section_id, headline, news_date, event_start_date, event_end_date, content, media_urls, source_links });
  res.status(201).json(item);
};

const update = async (req, res) => {
  const { section_id, headline, news_date, event_start_date, event_end_date, content, media_urls, source_links } = req.body;
  try {
    const item = await newsItemService.updateItem(req.params.id, { section_id, headline, news_date, event_start_date, event_end_date, content, media_urls, source_links });
    res.json(item);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await newsItemService.deleteItem(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: deleteItem,
};