import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import TargetState from './targetState.model';
import GameId from './GameId.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "sqlite",
      storage: "/Users/iain/code/state-economy-game/state-economy-game-backend/opt/app.db",
      logging: false,
      models: [TargetState, GameId]
    }),
    SequelizeModule.forFeature([TargetState, GameId])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
