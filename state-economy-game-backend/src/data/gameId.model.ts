import { DataTypes } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Guess from "./guess.model";

@Table({ tableName: "GameIds" })
export default class GameId extends Model implements GameId{
  @Column({ type: DataTypes.STRING, primaryKey: true })
  id: string;

  @Column({ type: DataTypes.INTEGER })
  lastRequestTimestamp: number;

  @HasMany(() => Guess)
  guesses: Guess[];
}
