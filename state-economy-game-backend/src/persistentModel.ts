import { GameId } from "state-economy-game-util/model";
import { Sequelize, Model, DataTypes } from "sequelize";

// CREATE TABLE TargetStateName (id integer primary key, targetStateName varchar(60), createdAt datetime, updatedAt datetime);
// CREATE TABLE GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, createdAt datetime, updatedAt datetime);
 

export class GameIdModel extends Model implements GameId {
  declare id: string;
  declare attempts: number;
}

export class TargetStateModel extends Model {
  declare id: number;
  declare targetStateName: string;
}

export function initPersistentModels(sequelize: Sequelize) {
  GameIdModel.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      attempts: DataTypes.INTEGER,
    },
    {
      tableName: "GameIds",
      sequelize,
      timestamps: true,
    }
  );

  TargetStateModel.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      targetStateName: DataTypes.STRING,
    },
    {
      tableName: "TargetStateName",
      sequelize,
      timestamps: true,
    }
  ); 
}