import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

import GameId from "./gameId.model";

// TODO fix name conflict between Guess interface and this interface name, issue #19
@Table({ tableName: "Guess" })
export default class Guess extends Model {
  @Column({ type: DataTypes.STRING, primaryKey: true })
  id: string;

  @Column({
    type: DataTypes.STRING,
    references: {
      key: "id"
    }
  })
  gameId: string;
  stateName: string;
}
