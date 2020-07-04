import { Sequelize } from "sequelize-typescript";
import fs from "fs";
import path from "path";
import log from "../middlewares/Logger";

export class Database {
  public static async init() {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      models: [path.join(__dirname, "../models")],
      username: "root",
      password: "root",
      storage: path.join(__dirname, "../..", "db.sqlite"),
      host: "localhost",
      logging: false,
    });

    try {
      // await sequelize.sync({ force: true });
      await sequelize.sync();
      log.info("Database :: Connection has been established successfully.");
    } catch (error) {
      log.error("Database :: Error at connecting to the database: " + error);
    }
  }
}
