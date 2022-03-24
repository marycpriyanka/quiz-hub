const router = require('express').Router();
const quizRoutes = require('./quizRoutes');
const categoryRoutes = require('./categoryRoutes');
const questionRoutes = require('./questionRoutes');
const choicesRoutes = require('./answerRoutes');
const scoreRoutes = require('./scoreRoutes');

router.use('/quiz', quizRoutes);
router.use('/category', categoryRoutes);
router.use('/questions', questionRoutes);
router.use('/choices', choicesRoutes);
router.use('/scores', scoreRoutes);

module.exports = router;