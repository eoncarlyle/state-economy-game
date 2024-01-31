import express, { Express } from "express";
import cors from "cors";
import cron from "node-cron";
import { Sequelize } from "sequelize";
import morgan from "morgan";
import path from "path";

import { initPersistentModels } from "./persistentModel";
import {
  postGameId,
  postGuessSubmission,
  getPuzzleAnswer,
  getTargetStateEconomy,
  getHealthCheck,
  runDailyTasks,
  handleErrors,
  handleUnhandledRoute,
} from "./service";
import { getLoggerFileStream, mainLogger, requestBodyToken, unprocessableContentLogger } from "./logging";

export class Backend {
  port: number;
  app: Express;
  constructor(port: number, dbPath: string, logPath: string) {
    this.app = express();
    this.port = port;

    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: dbPath,
      logging: false,
    });
    initPersistentModels(sequelize);

    this.app.use(express.json());
    this.app.use(cors());
    morgan.token("reqBody", requestBodyToken);
    //TODO: Dependency injection for this object
    const loggerFileStream = getLoggerFileStream(logPath);
    this.app.use(mainLogger(loggerFileStream));
    this.app.use(unprocessableContentLogger(loggerFileStream));

    this.app.post("/gameId", postGameId);
    this.app.post("/guess", postGuessSubmission);
    this.app.get("/answer/:id", getPuzzleAnswer);
    this.app.get("/economy", getTargetStateEconomy);
    this.app.get("/health", getHealthCheck);

    cron.schedule("0 0 * * *", runDailyTasks, { scheduled: true, timezone: "America/Chicago" });

    this.app.use(handleErrors);
    this.app.use(handleUnhandledRoute);
  }

  launch() {
    this.app.listen(this.port, () => {
      console.log(`[server]: Server is running at http://localhost:${this.port}`);
    });
  }

  static launch() {
    const dbPath = process.argv.at(2);
    const logPath = process.argv.at(3);
    const port = Number(process.argv.at(4)) || 3001;

    if (process.argv.length < 4 || process.argv.length > 6 || !dbPath || !logPath) {
      throw Error(`Illegal arguments ${process.argv}, correct form node index [dbPath] [logPath] [port]`);
    }

    console.log(`Assumed database path from command-line arguments: ${dbPath}`);
    console.log(`Assumed log path from command-line arguments: ${logPath}`);
    console.log(`Assumed port number from command-line arguments: ${port}`);
    new Backend(port, dbPath, logPath).launch();
  }
}
