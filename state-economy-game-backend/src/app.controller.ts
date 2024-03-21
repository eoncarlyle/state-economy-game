import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { AppService } from "./app.service";
import {
  StateEconomy,
  PuzzleAnswerResponse,
  IPuzzleSession,
  GuessSubmissionResponse,
  PuzzleAnswerRequest,
  GuessSubmissionRequest
} from "./state-economy-game-util/model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/economy")
  async getTargetStateEconomy(): Promise<StateEconomy> {
    return this.appService.getTargetStateEconomy();
  }

  @Get("/answer/:id")
  async getPuzzleAnswer(@Param() params: PuzzleAnswerRequest): Promise<PuzzleAnswerResponse> {
    return this.appService.getPuzzleAnswer(params.id);
  }

  @Post("/puzzle_session")
  async postPuzzleSession(): Promise<IPuzzleSession> {
    return this.appService.postPuzzleSession();
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
