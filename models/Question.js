const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question_text: {
      type: DataTypes.STRING,
      allowNull: false,
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
    correct_answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "quiz",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "question",
  }
);

module.exports = Question;
