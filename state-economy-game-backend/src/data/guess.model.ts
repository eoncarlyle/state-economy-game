import { DataTypes } from "sequelize";
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";

import PuzzleSession from "./puzzleSession.model";

// TODO fix name conflict between Guess interface and this interface name, issue #19
@Table({ tableName: "guesses" })
export default class Guess extends Model {
  @Column({ type: DataTypes.STRING, primaryKey: true })
  id: string;

  @Column({
    type: DataTypes.STRING
  })
  @ForeignKey(() => PuzzleSession)
  puzzleSessionId: string;

  @Column({ type: DataTypes.STRING })
  stateName: string;

  @BelongsTo(() => PuzzleSession, "puzzleSessionId")
  puzzleSession: PuzzleSession;
}
