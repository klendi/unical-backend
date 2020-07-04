import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";

@Table({ timestamps: true })
export class Reaction extends Model<Reaction> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  description!: string;
}
