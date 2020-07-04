import { PostMedia } from "./PostMedia";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  AllowNull,
  Default,
  HasMany,
  HasOne,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";

@Table({ timestamps: true })
export class Post extends Model<Post> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @AllowNull(true)
  @Default("image")
  @Column(DataType.STRING)
  content!: string;

  @HasOne(() => PostMedia)
  media_id!: PostMedia;
}
