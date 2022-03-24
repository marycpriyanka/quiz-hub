const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Choices extends Model { }

Choices.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    choice1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    choice2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    choice3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    choice4: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "question",
            key: "id"
        }
    }
});

module.exports = Choices;
