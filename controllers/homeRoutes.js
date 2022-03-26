const router = require('express').Router();
const { User, Quiz, Score } = require('../models');
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

// Route to render the login page
router.get("/login", (req, res) => {
    //If the user is already logged in, redirect to the homepage.
    if (req.session.logged_in) {
        res.redirect("/");
    }

    // Otherwise render the login page
    res.render("login");
});

// Route to render the signup page
router.get("/signup", (req, res) => {
    //If the user is already logged in, redirect to the homepage.
    if (req.session.logged_in) {
        res.redirect("/");
    }

    // Otherwise render the signup page
    res.render("register");
});

// Route to render the user scores
router.get("/scores", withAuth, async (req, res) => {
    try {
        const scoreData = await Score.findAll({
            include: [{
                model: Quiz
            }],
            where: {
                user_id: req.session.user_id
            }
        });

        const scores = scoreData.map(score => score.get({ plain: true }));

        res.render("scores", {
            scores,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        console.log(`Error in getting My Scores: ${err}`);
        res.status(500).json(err);
    }
});

// Route to render the Create Quiz page
router.get("/createQuiz", withAuth, async (req, res) => {
    try {
        res.render("createQuiz");
    }
    catch (err) {
        console.log(`Error in rendering the Create Quiz page: ${err}`);
        res.status(500).json(err);
    }
});

module.exports = router;