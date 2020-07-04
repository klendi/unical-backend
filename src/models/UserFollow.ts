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
export class UserFollow extends Model<UserFollow> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @BelongsTo(() => User)
  user_id!: User;

  @BelongsTo(() => User)
  target_user_id!: User;
}
