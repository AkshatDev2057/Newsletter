const express = require('express');
const router = express.Router();
const newsItemController = require('../controllers/newsItems');
const validation = require('../middlewares/validation');
const { createSchema, updateSchema } = require('../validations/newsItem');

// Routes
router.get('/', newsItemController.getAll);
router.get('/:id', newsItemController.getById);
router.post('/', validation(createSchema), newsItemController.create);
router.put('/:id', validation(updateSchema), newsItemController.update);
router.delete('/:id', newsItemController.delete);

module.exports = router;