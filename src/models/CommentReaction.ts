import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

@Table({ timestamps: true })
export class CommentReaction extends Model<CommentReaction> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @BelongsTo(() => User)
  author!: number;

  @ForeignKey(() => User)
  @Column
  author_id!: number;

  @BelongsTo(() => Reaction)
  reaction!: number;

  @ForeignKey(() => Reaction)
  @Column
  reaction_id!: number;

  @BelongsTo(() => Comment)
  comment!: Comment;

  @ForeignKey(() => Comment)
  @Column
  comment_id!: number;
}
