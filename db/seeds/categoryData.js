const { Category } = require("../../models");

const categoryData = [
    {
        category_name: "Animals"
    },
    {
        category_name: "Coding"
    },
    {
        category_name: "Geography"
    },
    {
        category_name: "Movies"
    },
    {
        category_name: "Music"
    },
    {
        category_name: "PNW"
    },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;