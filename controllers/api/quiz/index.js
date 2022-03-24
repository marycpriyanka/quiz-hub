const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const questionRoutes = require('./questionRoutes');
const answerRoutes = require('./answerRoutes');
const scoreRoutes = require('./scoreRoutes');

router.use('/category', categoryRoutes);
router.use('/questions', questionRoutes);
router.use('/answer', answerRoutes);
router.use('/scores', scoreRoutes);

module.exports = router;