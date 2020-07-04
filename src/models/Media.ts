import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  AllowNull,
  Default,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";

@Table({ timestamps: true })
export class Media extends Model<Media> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(2000))
  link!: string;

  @AllowNull(true)
  @Default("image")
  @Column(DataType.STRING)
  kind!: string;
}
