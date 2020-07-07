import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";
import { loadDotEnv } from "../utils/LoadEnvFiles";

class Locals {
  public static config(): any {
    loadDotEnv();

    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const port = process.env.PORT || 4040;
    const appSecret = process.env.APP_SECRET || "This is your responsibility!";
    const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || "50mb";
    const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || "50mb";

    const year = new Date().getFullYear();

    const isCORSEnabled = process.env.CORS_ENABLED || true;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
    const apiPrefix = process.env.API_PREFIX || "api";

    const logDays = process.env.LOG_DAYS || 10;

    const redisHttpPort = process.env.REDIS_PORT || 6379;
    const redisHttpHost = process.env.REDIS_HOST || "127.0.0.1";
    const redisPrefix = process.env.REDIS_DB || "q";
    const redisDB = process.env.REDIS_PREFIX || 3;

    const dbName = process.env.DB_NAME || "db.sqlite";
    const dbUser = process.env.DB_USER || "root";
    const dbPassword = process.env.DB_PASSWORD || "";
    const dbHost = process.env.DB_HOST || "localhost";
    const dbStorage =
      process.env.DB_HOST || path.join(__dirname, "../..", "db.sqlite");
    const dbDialect = process.env.DB_DIALECT || "sqlite";

    return {
      appSecret,
      apiPrefix,
      isCORSEnabled,
      jwtExpiresIn,
      logDays,
      maxUploadLimit,
      maxParameterLimit,
      port,
      redisDB,
      redisHttpPort,
      redisHttpHost,
      redisPrefix,
      url,
      dbName,
      dbUser,
      dbPassword,
      dbHost,
      dbDialect,
      dbStorage,
    };
  }

  public static dbConfig(): any {}

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
