const User = require("./User");
const Category = require("./Category");
const Quiz = require("./Quiz");
const Question = require("./Question");
const Score = require("./Score");

Category.hasMany(Quiz, {
    foreignKey: "category_id",
    onDelete: "CASCADE"
});

Quiz.belongsTo(Category, {
    foreignKey: "category_id"
});

Quiz.hasMany(Question, {
    foreignKey: "quiz_id",
    onDelete: "CASCADE"
});

Question.belongsTo(Quiz, {
    foreignKey: "quiz_id"
});


User.hasMany(Score, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Score.belongsTo(User, {
    foreignKey: "user_id"
});

Quiz.hasMany(Score, {
    foreignKey: "quiz_id",
    onDelete: "CASCADE"
});

Score.belongsTo(Quiz, {
    foreignKey: "quiz_id"
});

module.exports = { User, Category, Quiz, Question, Score };