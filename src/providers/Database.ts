import { Sequelize } from "sequelize-typescript";
import fs from "fs";
import path from "path";
import log from "../middlewares/Logger";
import Locals from "./Locals";

export class Database {
  public static async init() {
    const sequelize = new Sequelize({
      dialect: Locals.config().dbDialect,
      models: [path.join(__dirname, "../models")],
      username: Locals.config().dbUser,
      password: Locals.config().dbPassword,
      storage: Locals.config().dbStorage,
      host: Locals.config().dbHost,
      logging: false,
    });

    try {
      await sequelize.sync({ force: true });
      // await sequelize.sync();
      log.info("Database :: Connection has been established successfully.");
      return Promise.resolve();
    } catch (error) {
      log.error("Database :: Error at connecting to the database: " + error);
      return Promise.reject(error);
    }
  }
}
