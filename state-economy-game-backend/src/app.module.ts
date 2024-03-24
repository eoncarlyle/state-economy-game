import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { SequelizeModule } from "@nestjs/sequelize";
import { ScheduleModule } from "@nestjs/schedule";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import TargetState from "./data/targetState.model";
import PuzzleSession from "./data/puzzleSession.model";
import Guess from "./data/guess.model";
import { ModuleLogger } from "./logger.middleware";
import { GlobalExceptionsFilter } from "./app.filter";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "sqlite",
      storage: process.argv.at(2),
      logging: false,
      models: [TargetState, PuzzleSession, Guess]
    }),
    ScheduleModule.forRoot(),
    SequelizeModule.forFeature([TargetState, PuzzleSession, Guess])
  ],
  controllers: [AppController],
  providers: [AppService, ModuleLogger, { provide: APP_FILTER, useClass: GlobalExceptionsFilter }]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleLogger).forRoutes("*");
  }
}
