const express = require('express');
const router = express.Router();

router.use('/news-sections', require('../../../routes/newsSections'));
router.use('/news-items', require('../../../routes/newsItems'));

module.exports = router;