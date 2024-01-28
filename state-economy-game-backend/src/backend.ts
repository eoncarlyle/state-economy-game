import express, { Express } from "express";
import cors from "cors";
import cron from "node-cron";
import { Sequelize } from "sequelize";

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

export class Backend {
  port: number;
  app: Express;
  constructor(port: number, dbPath: string) {
    this.app = express();
    this.port = port;

    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: dbPath,
    });

    initPersistentModels(sequelize)

    this.app.use(express.json());
    this.app.use(cors());
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
    if (!dbPath) throw Error("No dbPath provided");

    console.log(`Assumed database path from cliargs: ${dbPath}`);
    console.log(`Assumed port number from cliargs: ${process.argv.at(3)}`);
    const port = Number(process.argv.at(3)) || 3001;
    new Backend(port, dbPath).launch();
  }
}
