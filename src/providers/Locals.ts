import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";

class Locals {
  public static config(): any {
    dotenv.config({ path: path.join(__dirname, "../../.env") });

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
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
