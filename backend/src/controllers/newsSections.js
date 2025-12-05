const newsSectionService = require('../services/newsSectionService');

const getAll = async (req, res) => {
  const sections = await newsSectionService.getAllSections();
  res.json(sections);
};

const getById = async (req, res) => {
  const section = await newsSectionService.getSectionById(req.params.id);
  if (!section) return res.status(404).json({ error: 'Section not found' });
  res.json(section);
};

const create = async (req, res) => {
  const { start_date, end_date, title } = req.body;
  const section = await newsSectionService.createSection({ start_date, end_date, title });
  res.status(201).json(section);
};

const update = async (req, res) => {
  const { start_date, end_date, title } = req.body;
  try {
    const section = await newsSectionService.updateSection(req.params.id, { start_date, end_date, title });
    res.json(section);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteSection = async (req, res) => {
  try {
    await newsSectionService.deleteSection(req.params.id);
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
  delete: deleteSection,
};