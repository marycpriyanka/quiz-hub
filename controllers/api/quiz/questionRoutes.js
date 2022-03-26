const router = require('express').Router();
const { Question } = require('../../../models');

router.get('/:quiz_id', (req,res) => {
    Question.findOne({})
    .then()
})

module.exports = router;