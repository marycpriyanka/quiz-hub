const router = require('express').Router();
const { User, Quiz } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
    try {
        // Gets max of 9 quizzes along with the comments
        const quizData = await Quiz.findAll({
            limit: 9
        });

        // Serialize data so that tempate can read it
        const quizzes = quizData.map(quiz => quiz.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("homepage", {
            quizzes,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(`Error in getting the homepage: ${err}`);
        res.status(500).json(err);
    }
});


module.exports = router;