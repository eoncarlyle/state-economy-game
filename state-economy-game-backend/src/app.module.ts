import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import TargetState from "./data/targetState.model";
import PuzzleSession from "./data/puzzleSession.model";
import Guess from "./data/guess.model";
import { ModuleLogger } from "./logger.middleware";
import { ScheduleModule } from "@nestjs/schedule";

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
  providers: [AppService, ModuleLogger]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleLogger).forRoutes("*");
  }
}
