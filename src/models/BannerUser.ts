import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  AutoIncrement,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";

@Table({ timestamps: true })
export class BannerUser extends Model<BannerUser> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @ForeignKey(() => User)
  @Column
  target_user_id!: number;
}
