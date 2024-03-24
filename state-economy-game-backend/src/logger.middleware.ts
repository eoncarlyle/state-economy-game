import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { Logger, transports, createLogger } from "winston";

@Injectable()
export class ModuleLogger implements NestMiddleware {
  logger: Logger;
  constructor() {
    this.logger = createLogger({
      level: "info",
      transports: [new transports.File({ filename: process.argv.at(3) })]
    });
  }

  info(message: string) {
    this.logger.info(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  httpError(status: number, message: string) {
    this.logger.error({ status: status, message: message })
  }

  use(req: Request, res: Response, next: NextFunction) {
    const [method, url, statusCode] = [req.method, req.originalUrl || req.url, req.statusCode];
    this.info(
      `${new Date()} "${method} ${url}" ${statusCode} ${JSON.stringify(req.body)} ${req.headers["user-agent"]}`
    );
    next();
  }
}
