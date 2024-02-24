import { DataTypes } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: "TargetStateName" })
export default class TargetState extends Model {
  @Column({ type: DataTypes.INTEGER, primaryKey: true})
  id: number;

  @Column({ type: DataTypes.STRING })
  targetStateName: string;

  @Column({ type: DataTypes.INTEGER })
  targetStateGdp: number;
}