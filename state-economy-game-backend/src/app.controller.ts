import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { AppService } from "./app.service";
import {
  EconomyResponse,
  PuzzleAnswerResponse,
  GameId,
  GuessSubmissionResponse,
  PuzzleAnswerRequest,
  GuessSubmissionRequest
} from "./state-economy-game-util/model";

//! Fix the Nest symlink issues!

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //TODO:
  // this.app.use(express.json());
  // this.app.use(cors());
  // morgan.token("reqBody", requestBodyToken);

  //TODO: Dependency injection for this object
  //const loggerFileStream = getLoggerFileStream(logPath);
  //this.app.use("/guess", guessLogger(loggerFileStream));
  //this.app.use(mainLogger(loggerFileStream));

  @Get("/economy")
  async getTargetStateEconomy(): Promise<EconomyResponse> {
    return this.appService.getTargetStateEconomy();
  }

  @Get("/answer/:id")
  async getPuzzleAnswer(@Param() params: PuzzleAnswerRequest): Promise<PuzzleAnswerResponse> {
    return this.appService.getPuzzleAnswer(params.id);
  }

  @Post("/gameId")
  async postGameId(): Promise<GameId> {
    return this.appService.postGameId();
  }

  @Post("/guess")
  async postGuess(@Body() body: GuessSubmissionRequest): Promise<GuessSubmissionResponse> {
    return this.appService.postGuess(body);
  }

  @Get("/health")
  getHealthCheck(): Object {
    return this.appService.getHealthCheck();
  }
}
