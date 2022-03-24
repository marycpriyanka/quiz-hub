const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Score extends Model { }

Score.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        total_score: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        quiz_id: {
            type: Datatypes.INTEGER,
            references: {
                model: "quiz",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "score"
    }
);

module.exports = Score;