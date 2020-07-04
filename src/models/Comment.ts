import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  AllowNull,
  Max,
  ForeignKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";
import { MinLength, MaxLength } from "class-validator";

@Table({ timestamps: true })
export class Comment extends Model<Comment> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @AllowNull(false)
  @MinLength(1, { message: "Comment length is too short" })
  @MaxLength(2200, { message: "Comment length is too long" })
  @Column(DataType.STRING(2200))
  content!: string;

  @BelongsTo(() => User)
  author!: User;

  @ForeignKey(() => User)
  @Column
  author_id!: number;
}
