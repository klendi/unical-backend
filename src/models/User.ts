import { BioDescription } from "./BioDescription";
import { UserFollow } from "./UserFollow";
import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  Length as SLength,
  Length,
  Index,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { MinLength, MaxLength, Matches } from "class-validator";
import { DataType } from "sequelize-typescript";
import { IsUserAlreadyExist } from "../validations/UsernameAlreadyExistsValidation";
import { User as UserInterface } from "../types/User";
import { Col } from "sequelize/types/lib/utils";
import { BannerUser } from "./BannerUser";

@Table({ timestamps: true })
export class User extends Model<UserInterface> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.STRING(30))
  @Index
  @MinLength(1, { message: "Username is too short" })
  @MaxLength(30, { message: "Username is too long" })
  @IsUserAlreadyExist({ message: "Username $value already exists" })
  @Matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)
  username!: string;

  @Column(DataType.STRING(100))
  @MinLength(1, { message: "Name is too short" })
  @MaxLength(100, { message: "Name is too long" })
  name!: string;

  @BelongsToMany(() => User, () => BannerUser, "target_user_id", "user_id")
  bannedUsers!: BannerUser[];

  @BelongsToMany(() => User, () => UserFollow, "target_user_id", "user_id")
  following!: UserFollow[];

  @HasMany(() => BioDescription)
  bio!: BioDescription[];
}
