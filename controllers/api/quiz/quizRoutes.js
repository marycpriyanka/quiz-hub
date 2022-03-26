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
});

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
});

//post quiz
router.post('/', async (req, res) => {
    try {
      const newQuiz = await Quiz.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newQuiz);
    } catch (err) {
      res.status(400).json(err);
    }
});

//delete quiz
router.delete('/:id', async (req, res) => {
    try {
      const quizData = await Quiz.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!quizData) {
        res.status(404).json({ message: 'No Quiz found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;