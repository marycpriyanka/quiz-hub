const router = require('express').Router();
const { Score, User } = require('../../../models');
const withAuth = require("../../../utils/auth");

// Gets all scores of a quiz
router.get("/", withAuth, async (req, res) => {
    try {
        const scoreData = await Score.findAll({
            include: [{
                model: User
            }],
            where: {
                quiz_id: req.body.quiz_id
            }
        });

        if (scoreData) {
            res.status(200).json(scoreData);
        }
        else {
            res.status(400).json({ message: "No scores for this quiz yet!" });
        }
    }
    catch (err) {
        console.log(`Error in getting My Scores: ${err}`);
        res.status(500).json(err);
    }
});

// Add a score
router.post("/", withAuth, async (req, res) => {
    try {
        const newScore = await Score.create({
            total_score: req.body.total_score,
            quiz_id: req.body.quiz_id,
            user_id: req.session.user_id
        });

        res.status(200).json(newScore);
    } catch (err) {
        console.log(`Error in adding a score: ${err}`);
        res.status(500).json(err);
    }
});

// Update a score by user id
router.put("/:userid", withAuth, async (req, res) => {
    try {
        const updatedScore = await Score.update(req.body, {
            where: {
                user_id: req.params.userid
            }
        });

        if (updatedScore) {
            res.status(200).json(updatedScore);
        }
        else {
            res.status(404).json({ message: "No score found with the given user id!"})
        }
    }
    catch (err) {
        console.log(`Error in updating a score by user id: ${err}`);
        res.status(500).json(err);
    }
});

module.exports = router;