import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "target_states" })
export default class TargetState extends Model {
  @Column({ type: DataTypes.INTEGER, primaryKey: true })
  id: number;

  @Column({ type: DataTypes.STRING })
  name: string;

  @Column({ type: DataTypes.INTEGER })
  gdp: number;
}
