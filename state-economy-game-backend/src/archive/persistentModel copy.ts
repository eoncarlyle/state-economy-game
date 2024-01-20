import { GameId } from "state-economy-game-util/model";
import { Sequelize, Model, DataTypes } from "sequelize";

// CREATE TABLE TargetStateName (id integer primary key, targetStateName varchar(60), createdAt datetime, updatedAt datetime);
// CREATE TABLE GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, createdAt datetime, updatedAt datetime);
 

class BaseGameIdModel extends Model implements GameId {
  declare id: string;
  declare attempts: number;
}

class BaseTargetStateModel extends Model {
  declare id: number;
  declare targetStateName: string;
}

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "/Users/iainschmitt/code/state-economy-game/state-economy-game-backend/app.db" 
});

export const GameIdModel = BaseGameIdModel.init(
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

export const TargetStateModel = BaseTargetStateModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    targetStateName: DataTypes.STRING,
  },
  {
    tableName: "TargetStateName",
    sequelize,
    timestamps: true
  }
);