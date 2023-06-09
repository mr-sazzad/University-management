import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { errorLogger, logger } from "./winston/logger";

async function connectionString() {
  let server: Server;

  try {
    mongoose.connect(config.database_url as string);
    logger.info("🛢️Connected Successfully 🎊");

    server = app.listen(() => {
      logger.info(
        `University-Management application listening on port ${config.port} 🥰`
      );
    });
  } catch (err) {
    errorLogger.error("Field To Connect Database 😭", err);
  }

  process.on("unhandledRejection", error => {
    if (server) {
      server.close(() => errorLogger.error(error));
      process.exit(1);
    } else {
      process.exit(1);
    }
  });
}

connectionString();
