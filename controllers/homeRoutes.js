const router = require('express').Router();
const { User, Quiz, Score, Category, Question } = require('../models');
const withAuth = require('../utils/auth');
const shuffle = require("shuffle-array");
const { route } = require('express/lib/application');

router.get("/", withAuth, async (req, res) => {
    try {
        // Gets max of 9 quizzes along with the comments
        const quizData = await Quiz.findAll({
            limit: 9
        });

        //Serialize data so that tempate can read it
        const quizzes = quizData.map(quiz => quiz.get({ plain: true }));

        //Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("homepage", {
            quizzes,
            categories,
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
            include: [
                {
                    model: Quiz,
                    include: [
                        {
                            model: Category
                        }
                    ]
                }
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        const scores = scoreData.map(score => score.get({ plain: true }));

        console.log(scores);

        // Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        res.render("userscores", {
            scores,
            categories,
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
        // Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        res.render("createquiz1", { categories, logged_in: req.session.logged_in });
    }
    catch (err) {
        console.log(`Error in rendering the Create Quiz page: ${err}`);
        res.status(500).json(err);
    }
});

// Route to render the Create Quiz questions page
router.get("/createQuestions/:id", withAuth, async (req, res) => {
    try {
        // Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        res.render("createquiz2", { categories, logged_in: req.session.logged_in});
    }
    catch (err) {
        console.log(`Error in rendering the Create Quiz questions page: ${err}`);
        res.status(500).json(err);
    }
});

// Route to render quiz page according to category selected
router.get("/category/:id", withAuth, async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [
                {
                    model: Quiz
                }
            ]
        });

        const category = categoryData.get({ plain: true });

        // Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        res.render("Quizhomepage", {
            category,
            categories,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        console.log(`Error in getting quiz by category id: ${err}`);
        res.status(500).json(err);
    }
});

router.get("/quiz/:id", withAuth, async (req, res) => {
    try {
        const quizData = await Quiz.findByPk(req.params.id, {
            include: [
                {
                    model: Question
                }
            ]
        });

        const quiz = quizData.get({ plain: true });
 
        // Shuffles the questions
        shuffle(quiz.questions);

        // Shuffles the choices
        for (let i = 0; i < quiz.questions.length; i++) {
            const question = quiz.questions[i];

            const choices = [];
            choices.push(question.choice1);
            choices.push(question.choice2);
            choices.push(question.choice3);
            choices.push(question.choice4);

            shuffle(choices);

            question.choice1 = choices[0];
            question.choice2 = choices[1];
            question.choice3 = choices[2];
            question.choice4 = choices[3];
        }

        // Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        res.render("takequiz", {
            quiz,
            categories,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        console.log(`Error in getting questions by quiz id: ${err}`);
        res.status(500).json(err);
    }
});

router.get("/results/:quiz_id", async (req, res) => {
    try {
        const scoreData = await Score.findOne({
            include: [
                {
                    model: Quiz
                }
            ],
            where: {
                quiz_id: req.params.quiz_id,
                user_id: req.session.user_id
            }
        });

        const score = scoreData.get({ plain: true });
console.log(score);
        // Get all scores for quiz
        const allScoreData = await Score.findAll({
            order: [['total_score', 'DESC']],
            limit: 5,
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Quiz,
                }
            ],
            where: {
                quiz_id: req.params.quiz_id,
            }
        });

        const scores = allScoreData.map(score => score.get({ plain: true }));
        // Gets all categories
        const categoriesData = await Category.findAll();

        const categories = categoriesData.map(category => category.get({ plain: true }));

        res.render("completedquiz", {
            score,
            scores,
            categories,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        console.log(`Error in getting results of a quiz: ${err}`);
        res.status(500).json(err);
    }
});

module.exports = router;