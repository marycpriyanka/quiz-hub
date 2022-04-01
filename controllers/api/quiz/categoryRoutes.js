const router = require('express').Router();
const { Category } = require('../../../models');

//get category by id
router.get('/:id', async (req, res) => {
    try {
        const singleCategory = await Category.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'category_name'],
        });

        if (!singleCategory) {
            res
                .status(400)
                .json({ message: 'No quiz found' });
            return;
        }

        res.status(200).json(singleCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;