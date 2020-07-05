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
  ForeignKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { Post } from "./Post";

@Table({ timestamps: true })
export class PostReaction extends Model<PostReaction> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @BelongsTo(() => Post)
  post!: Post;

  @BelongsTo(() => Reaction)
  reaction!: Reaction;

  @ForeignKey(() => Post)
  @Column
  post_id!: number;

  @ForeignKey(() => Reaction)
  @Column
  reaction_id!: number;
}
