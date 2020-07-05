import { Media } from "./Media";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  AllowNull,
  Default,
  ForeignKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { Post } from "./Post";

@Table({ timestamps: true })
export class PostMedia extends Model<PostMedia> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @BelongsTo(() => Post)
  post!: Post;

  @BelongsTo(() => Media)
  media!: Media;

  @ForeignKey(() => Post)
  @Column
  post_id!: number;

  @ForeignKey(() => Media)
  @Column
  media_id!: number;
}
