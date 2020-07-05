import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";

@Table({ timestamps: true })
export class UserFollow extends Model<UserFollow> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @ForeignKey(() => User)
  @Column
  target_user_id!: number;
}
