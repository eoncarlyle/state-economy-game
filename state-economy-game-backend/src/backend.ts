import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import cron from "node-cron";
import { Sequelize } from "sequelize";
import { Logger, transports, createLogger } from "winston";

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
  logger: Logger;

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

    this.logger = createLogger({
      level: "info",
      transports: [new transports.File({ filename: process.argv.at(3) })],
    });

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      this.logger.info(`${new Date()} "${req.method} ${req.originalUrl || req.url}" ${req.statusCode} ${JSON.stringify(req.body)} ${req.headers['user-agent']}`)
      next();
    })


    this.app.post("/gameId", postGameId);
    this.app.post("/guess", postGuessSubmission);
    this.app.get("/answer/:id", getPuzzleAnswer);
    this.app.get("/economy", getTargetStateEconomy);
    this.app.get("/health", getHealthCheck);

    cron.schedule("0 0 * * *", runDailyTasks(this.logger), { scheduled: true, timezone: "America/Chicago" });
    this.app.use(handleErrors);
    this.app.use(handleUnhandledRoute);
  }

  launch() {
    this.app.listen(this.port, () => {
      this.logger.info(`[server]: Server is running at http://localhost:${this.port}\n`);
    });
  }

  static launch() {
    const dbPath = process.argv.at(2);
    const logPath = process.argv.at(3);
    const port = Number(process.argv.at(4)) || 3001;

    if (process.argv.length < 4 || process.argv.length > 5 || !dbPath || !logPath) {
      throw Error(`Illegal arguments ${process.argv}, correct form node index [dbPath] [logPath] [port]`);
    }

    console.log(`Assumed database path from command-line arguments: ${dbPath}`);
    console.log(`Assumed log path from command-line arguments: ${logPath}`);
    console.log(`Assumed port number from command-line arguments: ${port}`);
    new Backend(port, dbPath, logPath).launch();
  }
}
