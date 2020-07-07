import winston from "winston";

const devFormat = () => {
  const formatMessage = (info: any) => `${info.level} ${info.message}`;
  const formatError = (info: any) =>
    `${info.timestamp} ${info.level} ${info.message}\n\n${info.stack}\n`;
  const format = (info: any) =>
    info instanceof Error ? formatError(info) : formatMessage(info);
  return winston.format.combine(
    winston.format.colorize(),
    winston.format.errors({ stack: true }),
    winston.format.printf(format)
  );
};

const logger = winston.createLogger({
  level: process.env.LOGGER_LEVEL || "error",
  format:
    process.env.NODE_ENV === "development"
      ? devFormat()
      : winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      level: process.env.LOGGER_LEVEL || "error",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        })
      ),
    })
  );
}

export default logger;
