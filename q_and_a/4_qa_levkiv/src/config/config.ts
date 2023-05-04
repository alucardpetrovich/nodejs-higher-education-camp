import convict from "convict";
import dotenv from "dotenv";
import { join } from "path";

dotenv.config();

export const config = convict({
  port: {
    doc: "Port for requests listening from client",
    format: Number,
    default: 3000,
    env: "PORT",
  },
  db: {
    url: {
      doc: "Database connection URL (PostgreSQL)",
      format: String,
      default: "",
      env: "DB_URL",
    },
    type: {
      doc: "RDBMS type",
      default: "postgres" as "postgres",
    },
    entities: {
      doc: "typeorm entities path",
      default: ["dist/**/*.entity{.ts,.js}"],
    },
    migrations: {
      doc: "typeorm migrations path",
      default: ["dist/**/migrations/**/*.{js,ts}"],
    },
  },
})
  .validate({ allowed: "strict" })
  .getProperties();
