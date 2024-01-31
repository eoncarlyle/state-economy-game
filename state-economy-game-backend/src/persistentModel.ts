import { GameId } from "state-economy-game-util/model";
import { Sequelize, Model, DataTypes } from "sequelize";


export class GameIdModel extends Model implements GameId {
  declare id: string;
  declare attempts: number;
  declare lastRequestTimestamp: number;
}

export class TargetStateModel extends Model {
  declare id: number;
  declare targetStateName: string;
  declare targetStateGdp: number;
}

export function initPersistentModels(sequelize: Sequelize) {
  GameIdModel.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      attempts: DataTypes.INTEGER, lastRequestTimestamp: DataTypes.INTEGER
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
      targetStateGdp: DataTypes.INTEGER
    },
    {
      tableName: "TargetStateName",
      sequelize,
      timestamps: true,
    }
  ); 
}