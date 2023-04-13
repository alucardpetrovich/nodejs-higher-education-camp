import convict from "convict";
import dotenv from "dotenv";

dotenv.config();

export const config = convict({
  port: {
    doc: "Port for requests listening from client",
    format: Number,
    default: 3000,
    env: "PORT",
  },
  dbUrl: {
    doc: "Database connection URL (PostgreSQL)",
    format: String,
    default: "",
    env: "DB_URL",
  },
})
  .validate({ allowed: "strict" })
  .getProperties();
