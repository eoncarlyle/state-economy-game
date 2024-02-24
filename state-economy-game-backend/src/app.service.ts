import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { randomUUID } from 'crypto';

import {
  StateRecord,
  EconomyResponse,
  PuzzleAnswerResponse,
  GuessSubmissionRequest,
  GuessSubmissionResponse,
} from 'state-economy-game-util/model';

import {
  getHaversineDistance,
  getHaversineBearing,
  isStateNameValid,
  getUsStateRecords,
} from 'state-economy-game-util/util';

import {
  MAX_GUESSES,
  TARGET_STATE_RETENTION,
} from 'state-economy-game-util/constants';
import TargetState from './targetState.model';
import GameId from './GameId.model';
import stateEconomies from './stateEconomies';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TargetState)
    private targetState: typeof TargetState,
    @InjectModel(GameId)
    private gameId: typeof GameId,
  ) {}

  async getTargetStateEconomy(): Promise<EconomyResponse> {
    const targetStateModel = await this.getTargetState();
    if (!targetStateModel)
      throw new NotFoundException('Target state not found');

    const targetStateEconomy = this.getEconomyNode(
      targetStateModel.targetStateName,
    );
    if (!targetStateEconomy)
      throw new NotFoundException('Target economy state not found');

    return {
      economy: targetStateEconomy,
      totalGdp: targetStateModel.targetStateGdp,
    };
  }

  async getPuzzleAnswer(id: string): Promise<PuzzleAnswerResponse> {
    if (!id) {
      throw new BadRequestException('Request must contain a game id');
    }

    const gameId = await GameId.findOne({ where: { id: id } });
    if (!gameId)
      throw new UnprocessableEntityException('Game id must be valid');
    else if (gameId?.attempts < MAX_GUESSES)
      throw new UnprocessableEntityException(
        `${MAX_GUESSES} guesses must be made before answer can be requested`,
      );

    const record = await this.getTargetStateRecord();
    return {
      id: id,
      targetStateName: record.name,
    };
  }

  async postGameId(): Promise<GameId> {
    const newUUID = randomUUID();
    return await GameId.create({
      id: newUUID,
      attempts: 0,
    });
  }

  async postGuess(
    body: GuessSubmissionRequest,
  ): Promise<GuessSubmissionResponse> {
    const { id, guessStateName, requestTimestamp } = body;

    if (!id || !guessStateName || !requestTimestamp)
      throw new BadRequestException(
        'Request must contain and id, a state name, and a request timestamp',
      );

    const gameId = await GameId.findOne({ where: { id: id } });
    if (!isStateNameValid(guessStateName) || !gameId)
      throw new UnprocessableEntityException(
        'Game id and a guess state name must both be valid',
      );
    else if (gameId.attempts >= MAX_GUESSES)
      throw new UnprocessableEntityException(
        'Too many request have been made for this game',
      );
    else if (requestTimestamp === gameId.lastRequestTimestamp)
      throw new UnprocessableEntityException('Duplicate of successful request');

    const targetStateRecord = await this.getTargetStateRecord();
    const distance = getHaversineDistance(
      StateRecord.of(guessStateName),
      targetStateRecord,
    );

    const maxDistance = getUsStateRecords()
      .map((stateRecord: StateRecord) =>
        getHaversineDistance(stateRecord, targetStateRecord),
      )
      .reduce((acc, cur) => {
        if (cur > acc) return cur;
        else return acc;
      }, 0);

    await GameId.update(
      { attempts: gameId.attempts + 1, lastRequestTimestamp: requestTimestamp },
      { where: { id: id } },
    );

    return {
      id: id,
      distance: distance,
      bearing: getHaversineBearing(
        StateRecord.of(guessStateName),
        targetStateRecord,
      ),
      percentileScore: Math.round((1 - distance / maxDistance) * 100),
    };
  }

  getHealthCheck(): Object {
    return { status: 'UP' };
  }

  async getTargetStateRecord(): Promise<StateRecord> {
    return StateRecord.of((await this.getTargetState()).targetStateName);
  }

  async getTargetState(): Promise<TargetState> {
    const targetStateModel = await this.targetState.findOne({
      order: [['id', 'DESC']],
    });
    if (!targetStateModel) throw new Error('Target state not found');
    return targetStateModel;
  }

  getEconomyNode(stateName: string) {
    if (stateName in stateEconomies) return stateEconomies[stateName];
    else return null;
  }
}
