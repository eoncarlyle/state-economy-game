import { DataTypes } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Guess from "./guess.model";
import { IPuzzleSession } from "src/state-economy-game-util/model";

@Table({ tableName: "puzzle_sessions" })
export default class PuzzleSession extends Model implements IPuzzleSession {
  @Column({ type: DataTypes.STRING, primaryKey: true })
  id: string;

  @Column({ type: DataTypes.INTEGER })
  lastRequestTimestamp: number;

  @HasMany(() => Guess, "puzzleSessionId")
  guesses: Guess[];
}
