const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//api
router.use('/api', apiRoutes);
//homepage
router.use('/', homeRoutes);

module.exports = router;