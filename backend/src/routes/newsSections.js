const express = require('express');
const router = express.Router();
const newsSectionController = require('../controllers/newsSections');
const validation = require('../middlewares/validation');
const { createSchema, updateSchema } = require('../validations/newsSection');

// Routes
router.get('/', newsSectionController.getAll);
router.get('/:id', newsSectionController.getById);
router.post('/', validation(createSchema), newsSectionController.create);
router.put('/:id', validation(updateSchema), newsSectionController.update);
router.delete('/:id', newsSectionController.delete);

module.exports = router;