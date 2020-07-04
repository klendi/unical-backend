import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";
import { MinLength, MaxLength } from "class-validator";

@Table({ timestamps: true })
export class BioDescription extends Model<BioDescription> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @AllowNull(false)
  @MinLength(1, { message: "Bio description too short" })
  @MaxLength(300, { message: "Bio description too long" })
  @Column(DataType.STRING)
  content!: string;

  @ForeignKey(() => User)
  @Column
  user_id!: number;
}
