import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.APPLICATION_PORT,
  database_url: process.env.DATABASE_URL,
  student_password: process.env.STUDENT_PASSWORD,
  node_env: process.env.NODE_ENV
};
