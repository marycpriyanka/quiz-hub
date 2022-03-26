const router = require('express').Router();
const { Quiz, User, Category } = require('../../../models');

//get all quizzes
router.get('/', async (req, res) => {
    try {
        const quizData = await Quiz.findAll();
        res.status(200).json(quizData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get quiz by single id
router.get('/:id', async (req, res) => {
    try {
        const chosenQuiz = await Quiz.findByPk(req.params.id);

        if (!chosenQuiz) {
            res.status(404).json({ message: 'No quiz found' });
            return;
        }

        res.status(200).json(chosenQuiz);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get 

module.exports = router;