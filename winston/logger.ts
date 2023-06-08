import path from "path";
import winston from "winston";
import "winston-daily-rotate-file";
const { combine, label, timestamp, simple, prettyPrint } = winston.format;

const errorLogger = winston.createLogger({
  level: "error",
  format: combine(
    label({ label: "errors log file 💣" }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    simple(),
    prettyPrint()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      filename: path.join(process.cwd(), "logger", "errors", "%DATE%.log"),
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxFiles: "14d",
      maxSize: "20m"
    })
  ]
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    label({ label: "information log file 🚀" }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),

    winston.format.simple(),
    prettyPrint()
  ),

  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      filename: path.join(process.cwd(), "logger", "success", "%DATE%.log"),
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxFiles: "14d",
      maxSize: "20m"
    })
  ]
});

export { errorLogger, logger };
