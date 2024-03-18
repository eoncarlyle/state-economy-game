import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "GameIds" })
export default class GameId extends Model implements GameId{
  @Column({ type: DataTypes.STRING, primaryKey: true })
  id: string;

  @Column({ type: DataTypes.INTEGER })
  lastRequestTimestamp: number;
}
