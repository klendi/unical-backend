import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  Length as SLength,
} from "sequelize-typescript";
import { MinLength, MaxLength } from "class-validator";
import { DataType } from "sequelize-typescript";
import { IsUserAlreadyExist } from "../validations/UsernameAlreadyExistsValidation";
import { User as UserInterface } from "../types/User";

@Table({ timestamps: true })
export class User extends Model<UserInterface> {
  @PrimaryKey
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.STRING)
  @MinLength(1, { message: "Username is too short" })
  @MaxLength(30, { message: "Username is too long" })
  @IsUserAlreadyExist({ message: "Username $value already exists" })
  username!: string;
}
