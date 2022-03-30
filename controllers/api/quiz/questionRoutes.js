const router = require('express').Router();
const { Question } = require('../../../models');

router.get('/', (req,res) => {
    Question.findAll({
        attributes: [
            'id',
            'question_text',
            'choice1',
            'choice2',
            'choice3',
            'choice4'
        ],
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:quiz_id', (req, res) => {
    Question.findOne({
        where: {
            quiz_id: req.params.quiz_id
        }
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req,res) => {
    Question.create({
        question_text: req.body.question_text,
        choice1:req.body.choice1,
        choice2:req.body.choice2,
        choice3:req.body.choice3,
        choice4:req.body.choice4,
        correct_answer:req.body.correct_answer
       
    })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put(':/quiz_id')


module.exports = router;