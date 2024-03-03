import express, { Express } from "express";
import cors from "cors";
import cron from "node-cron";
import { Sequelize } from "sequelize";
import morgan from "morgan";
import fs from "node:fs";

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
import { getLoggerFileStream, mainLogger, requestBodyToken, guessLogger } from "./logging";

export class Backend {
  port: number;
  app: Express;
  appLogPath: string;
  constructor(port: number, dbPath: string, accessLogPath: string, appLogPath: string) {
    this.app = express();
    this.port = port;
    this.appLogPath = appLogPath;

    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: dbPath,
      logging: false,
    });
    initPersistentModels(sequelize);

    this.app.use(express.json());
    this.app.use(cors());
    morgan.token("reqBody", requestBodyToken);
    const loggerFileStream = getLoggerFileStream(accessLogPath);
    this.app.use("/guess", guessLogger(loggerFileStream));
    this.app.use(mainLogger(loggerFileStream));

    this.app.post("/gameId", postGameId);
    this.app.post("/guess", postGuessSubmission);
    this.app.get("/answer/:id", getPuzzleAnswer);
    this.app.get("/economy", getTargetStateEconomy);
    this.app.get("/health", getHealthCheck);

    cron.schedule("0 0 * * *", runDailyTasks(this.appLogPath), { scheduled: true, timezone: "America/Chicago" });
    this.app.use(handleErrors);
    this.app.use(handleUnhandledRoute);
  }

  launch() {
    this.app.listen(this.port, () => {
      fs.writeFileSync(this.appLogPath, `[server]: Server is running at http://localhost:${this.port}\n`, {
        flag: "a+",
      });
    });
  }

  static launch() {
    const dbPath = process.argv.at(2);
    const accessLogPath = process.argv.at(3);
    const appLogPath = process.argv.at(4);
    const port = Number(process.argv.at(5)) || 3001;

    if (process.argv.length < 5 || process.argv.length > 6 || !dbPath || !accessLogPath || !appLogPath) {
      throw Error(`Illegal arguments ${process.argv}, correct form node index [dbPath] [logPath] [port]`);
    }

    console.log(`Assumed database path from command-line arguments: ${dbPath}`);
    console.log(`Assumed log path from command-line arguments: ${accessLogPath}`);
    console.log(`Assumed log path from command-line arguments: ${appLogPath}`);
    console.log(`Assumed port number from command-line arguments: ${port}`);
    new Backend(port, dbPath, accessLogPath, appLogPath).launch();
  }
}
