import { Media } from "./Media";
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
import { Post } from "./Post";

@Table({ timestamps: true })
export class PostMedia extends Model<PostMedia> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @BelongsTo(() => Post)
  post_id!: Post;

  @BelongsTo(() => Media)
  media_id!: Media;
}
