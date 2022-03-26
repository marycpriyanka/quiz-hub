const router = require('express').Router();
const { Score } = require('../../../models');

// Gets all high scores of a quiz
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
        else

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

module.exports = router;