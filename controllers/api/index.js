const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quiz')

//user routes
router.use('/users', userRoutes);
//quiz routes
router.use('/quiz', quizRoutes);

module.exports = router;