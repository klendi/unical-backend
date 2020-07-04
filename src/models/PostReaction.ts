import { Reaction } from "./Reaction";
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
export class PostReaction extends Model<PostReaction> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @BelongsTo(() => Post)
  post_id!: Post;

  @BelongsTo(() => Reaction)
  reaction_id!: Reaction;
}
