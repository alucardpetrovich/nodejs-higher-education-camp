import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { HttpError } from "http-errors";
import { config } from "./config/config";
import { postsController } from "./modules/posts/posts.controller";
import { createConnection } from "./database";

export class Server {
  private app = express();
  private config = config;

  async start() {
    // init server
    // init config
    // init database
    // init middlewares
    // init routes
    // init error handling
    // start listening
    await this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  async initDatabase() {
    try {
      await createConnection(this.config.dbUrl);

      console.log("Successfully connected to database");
    } catch (err) {
      console.log("Database connection failed", err);
      process.exit(1);
    }
  }

  private initMiddlewares() {
    this.app.use(express.json({ limit: "5mb" }));
    this.app.use(morgan("common"));
  }

  private initRoutes() {
    this.app.use("/api/posts", postsController);
  }

  private initErrorHandling() {
    this.app.use(
      (err: HttpError, req: Request, res: Response, next: NextFunction) => {
        const statusCode = err.status || 500;
        res.status(statusCode).send({
          message: err.message,
          status: statusCode,
        });
      }
    );
  }

  private startListening() {
    this.app.listen(this.config.port, () => {
      console.log("Server started listening on port", this.config.port);
    });
  }
}
