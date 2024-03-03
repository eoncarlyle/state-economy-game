import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { Logger, transports, createLogger } from "winston"

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  logger: Logger 
  constructor() {
    this.logger = createLogger(
      {
        level: "info",
        transports: [
          new transports.File({ filename: process.argv.at(3) }),
        ]
      } 
    ) 
  }
  
  use(req: Request, res: Response, next: NextFunction) {
    //TODO: Compare against relevant Morgan functions to fill out this method
    //this.logger.log(req.body)
    this.logger.info("here")
    next();
  }
}
