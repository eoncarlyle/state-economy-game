import {
  Inject,
  BadRequestException,
  Injectable,
  NotFoundException,
  Req,
  UnprocessableEntityException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Cron } from "@nestjs/schedule";

import { randomUUID } from "crypto";
import { Op, Sequelize } from "sequelize";

import {
  StateRecord,
  EconomyResponse,
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
import GameId from "./data/gameId.model";
import stateEconomies from "./stateEconomies";
import { ModuleLogger } from "./logger.middleware";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TargetState)
    private targetState: typeof TargetState,
    @InjectModel(GameId)
    private gameId: typeof GameId,
    private moduleLogger: ModuleLogger
  ) {}

  async getTargetStateEconomy(): Promise<EconomyResponse> {
    const targetStateModel = await this.getTargetState();
    if (!targetStateModel) throw new NotFoundException("Target state not found");

    const targetStateEconomy = this.getEconomyNode(targetStateModel.targetStateName);
    if (!targetStateEconomy) throw new NotFoundException("Target economy state not found");

    return {
      economy: targetStateEconomy,
      totalGdp: targetStateModel.targetStateGdp
    };
  }

  async getPuzzleAnswer(id: string): Promise<PuzzleAnswerResponse> {
    if (!id) {
      throw new BadRequestException("Request must contain a game id");
    }

    const gameId = await GameId.findOne({ where: { id: id } });
    if (!gameId) throw new UnprocessableEntityException("Game id must be valid");
    else if (gameId?.attempts < MAX_GUESSES)
      throw new UnprocessableEntityException(`${MAX_GUESSES} guesses must be made before answer can be requested`);

    const record = await this.getTargetStateRecord();
    return {
      id: id,
      targetStateName: record.name
    };
  }

  async postGameId(): Promise<GameId> {
    const newUUID = randomUUID();
    return await GameId.create({
      id: newUUID,
      attempts: 0
    });
  }

  async postGuess(body: GuessSubmissionRequest): Promise<GuessSubmissionResponse> {
    const { id, guessStateName, requestTimestamp } = body;

    if (!id || !guessStateName || !requestTimestamp)
      throw new BadRequestException("Request must contain and id, a state name, and a request timestamp");

    const gameId = await GameId.findOne({ where: { id: id } });
    if (!isStateNameValid(guessStateName) || !gameId)
      throw new UnprocessableEntityException("Game id and a guess state name must both be valid");
    else if (gameId.attempts >= MAX_GUESSES)
      throw new UnprocessableEntityException("Too many request have been made for this game");
    else if (requestTimestamp === gameId.lastRequestTimestamp)
      throw new UnprocessableEntityException("Duplicate of successful request");

    const targetStateRecord = await this.getTargetStateRecord();
    const distance = getHaversineDistance(StateRecord.of(guessStateName), targetStateRecord);

    const maxDistance = getUsStateRecords()
      .map((stateRecord: StateRecord) => getHaversineDistance(stateRecord, targetStateRecord))
      .reduce((acc, cur) => {
        if (cur > acc) return cur;
        else return acc;
      }, 0);

    await GameId.update(
      { attempts: gameId.attempts + 1, lastRequestTimestamp: requestTimestamp },
      { where: { id: id } }
    );

    return {
      id: id,
      distance: distance,
      bearing: getHaversineBearing(StateRecord.of(guessStateName), targetStateRecord),
      percentileScore: Math.round((1 - distance / maxDistance) * 100)
    };
  }

  getHealthCheck(): Object {
    return { status: "UP" };
  }

  async getTargetStateRecord(): Promise<StateRecord> {
    return StateRecord.of((await this.getTargetState()).targetStateName);
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
    await this.deleteObsoleteGameIds();
    await this.deleteObsoleteTargetStates();
    await this.updateTargetState();
  }

  async deleteObsoleteGameIds(): Promise<void> {
    const obsoleteDate = new Date();
    obsoleteDate.setDate(obsoleteDate.getDate() - 1);

    const deletedGameIdCount = await this.gameId.destroy({
      where: {
        createdAt: {
          [Op.lt]: obsoleteDate
        }
      }
    });
    this.moduleLogger.info(`Obsolete GameIds deleted: ${deletedGameIdCount}`);
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
    const unselectableTargetStateNames = (await this.targetState.findAll({ attributes: ["targetStateName"] })).map(
      (targetState: TargetState) => targetState.targetStateName
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
      targetStateName: newTargetState.name,
      targetStateGdp: this.getRoundedTotalGdp(newEconomyNode)
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
