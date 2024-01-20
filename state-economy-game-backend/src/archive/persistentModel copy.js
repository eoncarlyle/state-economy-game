"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetStateModel = exports.GameIdModel = void 0;
const sequelize_1 = require("sequelize");
// CREATE TABLE TargetStateName (id integer primary key, targetStateName varchar(60), createdAt datetime, updatedAt datetime);
// CREATE TABLE GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, createdAt datetime, updatedAt datetime);
class BaseGameIdModel extends sequelize_1.Model {
}
class BaseTargetStateModel extends sequelize_1.Model {
}
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "/Users/iainschmitt/code/state-economy-game/state-economy-game-backend/app.db"
});
exports.GameIdModel = BaseGameIdModel.init({
    id: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
    attempts: sequelize_1.DataTypes.INTEGER,
}, {
    tableName: "GameIds",
    sequelize,
    timestamps: true,
});
exports.TargetStateModel = BaseTargetStateModel.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    targetStateName: sequelize_1.DataTypes.STRING,
}, {
    tableName: "TargetStateName",
    sequelize,
    timestamps: true
});
