import winston from "winston";

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        })
        // winston.format.printf(
        //   (info) =>
        //     `${info.timestamp} ${info.level}: ${info.message}` +
        //     (info.splat !== undefined ? `${info.splat}` : " ")
        // )
      ),
      transports: [
        new winston.transports.File({
          filename: "error.log",
          level: "error",
        }),
      ],
    });

    if (process.env.NODE_ENV !== "production") {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json(),
            winston.format.printf(
              (info) =>
                `${info.timestamp} ${info.level}: ${info.message}` +
                (info.splat !== undefined ? `${info.splat}` : " ")
            ),
            winston.format.timestamp({
              format: "YYYY-MM-DD HH:mm:ss",
            })
          ),
        })
      );
    }
  }

  private logger: winston.Logger;

  // Adds INFO prefix string to the log string
  public info(...args: any[]): any {
    const data = args.reduce((acc, item) => (acc += " " + item));
    return this.logger.info(data);
  }

  // Adds WARN prefix string to the log string
  public warn(...args: any[]): any {
    const data = args.reduce((acc, item) => (acc += " " + item));
    return this.logger.info(data);
  }

  // Adds ERROR prefix string to the log string
  public error(...args: any[]): any {
    const data = args.reduce((acc, item) => (acc += " " + item));

    return this.logger.error(data);
  }
}

export default new Logger();
