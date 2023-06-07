import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function connectionString() {
  try {
    mongoose.connect(config.database_url as string);
    console.log("Database Connected Successfully");

    app.listen(() => {
      console.log(
        `University-Management application listening on port ${config.port}`
      );
    });
  } catch (err) {
    console.log("Field To Connect Database", err);
  }
}

connectionString();
