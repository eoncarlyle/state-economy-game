import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Cron } from "@nestjs/schedule";
import { randomUUID } from "crypto";
import { Op, Sequelize } from "sequelize";

import {
  StateRecord,
  StateEconomy,
  PuzzleAnswerResponse,
  GuessSubmissionRequest,
  GuessSubmissionResponse,
  NonLeafEconomyNode,
  LeafEconomyNode
} from "./state-economy-game-util/model";

import {
  getHaversineDistance,
  getHaversineBearing,
  isStateNameValid,
  getUsStateRecords
} from "./state-economy-game-util/util";

import { MAX_GUESSES, TARGET_STATE_RETENTION } from "./state-economy-game-util/constants";
import TargetState from "./data/targetState.model";
import Guess from "./data/guess.model";
import PuzzleSession from "./data/puzzleSession.model";
import stateEconomies from "./stateEconomies";
import { ModuleLogger } from "./logger.middleware";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TargetState)
    private targetState: typeof TargetState,
    @InjectModel(PuzzleSession)
    private puzzleSession: typeof PuzzleSession,
    private moduleLogger: ModuleLogger
  ) {}

  async getTargetStateEconomy(): Promise<StateEconomy> {
    const targetStateModel = await this.getTargetState();
    if (!targetStateModel) throw new NotFoundException("Target state not found");

    const targetStateEconomy = this.getEconomyNode(targetStateModel.name);
    if (!targetStateEconomy) throw new NotFoundException("Target economy state not found");

    return {
      economy: targetStateEconomy,
      totalGdp: targetStateModel.gdp
    };
  }

  async getPuzzleAnswer(id: string): Promise<PuzzleAnswerResponse> {
    if (!id) {
      throw new BadRequestException("Request must contain a game id");
    }

    const puzzleSessionId = await PuzzleSession.findOne({ where: { id: id } });
    const guesses = await Guess.findAll({ where: { puzzleSessionId: id } });

    if (!puzzleSessionId) throw new UnprocessableEntityException("Game id must be valid");
    else if (guesses.length < MAX_GUESSES)
      throw new UnprocessableEntityException(`${MAX_GUESSES} guesses must be made before answer can be requested`);

    const targetStateRecord = await this.getTargetStateRecord();

    return {
      id: id,
      targetStateName: targetStateRecord.name
    };
  }

  async postPuzzleSession(): Promise<PuzzleSession> {
    const newUUID = randomUUID();
    return await PuzzleSession.create({
      id: newUUID
    });
  }

  async postGuess(body: GuessSubmissionRequest): Promise<GuessSubmissionResponse> {
    const { id, guessStateName, requestTimestamp } = body;

    if (!id || !guessStateName || !requestTimestamp)
      throw new BadRequestException("Request must contain and id, a state name, and a request timestamp");

    const puzzleSession = await PuzzleSession.findOne({ where: { id: id } });
    await this.validateGuess(id, guessStateName, puzzleSession);
    const targetStateRecord = await this.getTargetStateRecord();
    const distance = getHaversineDistance(StateRecord.of(guessStateName), targetStateRecord);

    const maxDistance = getUsStateRecords()
      .map((stateRecord: StateRecord) => getHaversineDistance(stateRecord, targetStateRecord))
      .reduce((acc, cur) => {
        if (cur > acc) return cur;
        else return acc;
      }, 0);

    await PuzzleSession.update({ lastRequestTimestamp: requestTimestamp }, { where: { id: id } });
    await Guess.create({
      id: randomUUID(),
      puzzleSessionId: puzzleSession.id,
      stateName: guessStateName
    });

    return {
      id: id,
      distance: distance,
      bearing: getHaversineBearing(StateRecord.of(guessStateName), targetStateRecord),
      percentileScore: Math.round((1 - distance / maxDistance) * 100)
    };
  }

  private async validateGuess(id: string, guessStateName: string, puzzleSessionId: PuzzleSession) {
    const guesses = await Guess.findAll({ where: { puzzleSessionId: id } });

    if (!puzzleSessionId || !isStateNameValid(guessStateName)) 
      throw new UnprocessableEntityException("Puzzle session id and a guess state name must both be valid");
    else if (guesses.length >= MAX_GUESSES)
      throw new UnprocessableEntityException("Too many request have been made for this game");
    else if (guesses.map((guess: Guess) => guess.stateName).includes(guessStateName))
      throw new UnprocessableEntityException("Duplicate of previous request");
  }

  getHealthCheck(): Object {
    return { status: "UP" };
  }

  async getTargetStateRecord(): Promise<StateRecord> {
    return StateRecord.of((await this.getTargetState()).name);
  }

  async getTargetState(): Promise<TargetState> {
    const targetStateModel = await this.targetState.findOne({
      order: [["id", "DESC"]]
    });
    if (!targetStateModel) throw new Error("Target state not found");
    return targetStateModel;
  }

  getEconomyNode(stateName: string) {
    if (stateName in stateEconomies) return stateEconomies[stateName];
    else return null;
  }

  @Cron("0 0 * * *", { timeZone: "America/Chicago" })
  async runDailyTasks(): Promise<void> {
    await this.deleteObsoletePuzzleSessions();
    await this.deleteObsoleteTargetStates();
    await this.updateTargetState();
  }

  async deleteObsoletePuzzleSessions(): Promise<void> {
    const obsoleteDate = new Date();
    obsoleteDate.setDate(obsoleteDate.getDate() - 1);

    const deletedPuzzleSession = await this.puzzleSession.destroy({
      where: {
        createdAt: {
          [Op.lt]: obsoleteDate
        }
      }
    });
    this.moduleLogger.info(`Obsolete puzzle sessions deleted: ${deletedPuzzleSession}`);
  }

  async deleteObsoleteTargetStates(): Promise<void> {
    const targetStateCount = await this.targetState.count();
    this.moduleLogger.info(`Current target state count: ${targetStateCount}`);
    const obsoleteStateModelCount = targetStateCount - TARGET_STATE_RETENTION + 1;

    if (obsoleteStateModelCount > 0) {
      const deletedTargetStateCount = await this.targetState.destroy({
        where: {
          id: {
            [Op.lte]: obsoleteStateModelCount
          }
        }
      });
      this.moduleLogger.info(`Obsolete target states deleted: ${deletedTargetStateCount}`);

      const updatedStateModelCount = await this.targetState.update(
        { id: Sequelize.literal(`id - ${obsoleteStateModelCount}`) },
        { where: {} }
      );
      this.moduleLogger.info(`Updated target state rows: ${updatedStateModelCount}`);
    }
  }

  async updateTargetState(): Promise<void> {
    const unselectableTargetStateNames = (await this.targetState.findAll({ attributes: ["name"] })).map(
      (targetState: TargetState) => targetState.name
    );

    const selectableTargetStates = getUsStateRecords().filter(
      (stateRecord: StateRecord) => !unselectableTargetStateNames.includes(stateRecord.name)
    );

    const newTargetState = selectableTargetStates.at(this.getRandomInt(selectableTargetStates.length));
    if (!newTargetState) throw new Error("Failure to create new target state");

    const newEconomyNode = this.getEconomyNode(newTargetState.name);
    if (!newEconomyNode)
      throw new Error(`Failure to find economy records for new target state '${newTargetState.name}'`);

    await this.targetState.create({
      id: (await this.targetState.count()) + 1,
      name: newTargetState.name,
      gdp: this.getRoundedTotalGdp(newEconomyNode)
    });
    this.moduleLogger.info(`New target state: ${newTargetState.name}`);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRoundedTotalGdp(economy: NonLeafEconomyNode): number {
    return Math.round(this.getTotalGdp(economy));
  }

  getTotalGdp(economy: NonLeafEconomyNode | LeafEconomyNode): number {
    if ("children" in economy) {
      return economy.children.map((node) => this.getTotalGdp(node)).reduce((prev, cur) => prev + cur, 0);
    } else {
      return economy.gdp;
    }
  }
}
