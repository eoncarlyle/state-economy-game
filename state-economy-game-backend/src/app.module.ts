import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import TargetState from "./data/targetState.model";
import GameId from "./data/gameId.model";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "sqlite",
      storage: process.argv[2],
      //logging: false,
      models: [TargetState, GameId],
    }),
    SequelizeModule.forFeature([TargetState, GameId]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
