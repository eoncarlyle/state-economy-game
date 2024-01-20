"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPersistentModels = exports.TargetStateModel = exports.GameIdModel = void 0;
const sequelize_1 = require("sequelize");
// CREATE TABLE TargetStateName (id integer primary key, targetStateName varchar(60), createdAt datetime, updatedAt datetime);
// CREATE TABLE GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, createdAt datetime, updatedAt datetime);
class GameIdModel extends sequelize_1.Model {
}
exports.GameIdModel = GameIdModel;
class TargetStateModel extends sequelize_1.Model {
}
exports.TargetStateModel = TargetStateModel;
function initPersistentModels(sequelize) {
    GameIdModel.init({
        id: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
        attempts: sequelize_1.DataTypes.INTEGER,
    }, {
        tableName: "GameIds",
        sequelize,
        timestamps: true,
    });
    TargetStateModel.init({
        id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
        targetStateName: sequelize_1.DataTypes.STRING,
    }, {
        tableName: "TargetStateName",
        sequelize,
        timestamps: true,
    });
}
exports.initPersistentModels = initPersistentModels;
