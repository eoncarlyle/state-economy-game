import { NextFunction, Request, Response } from "express";
import { randomUUID } from "crypto";
import { Op, DataTypes, Sequelize } from "sequelize";
import fs from "node:fs"

import {
  StateRecord,
  GameId,
  GuessSubmissionResponse,
  GuessSubmissionRequest,
  PuzzleAnswerResponse,
  EconomyResponse,
  NonLeafEconomyNode,
  LeafEconomyNode,
} from "state-economy-game-util/model";
import { GameIdModel, TargetStateModel } from "./persistentModel";
import {
  getHaversineDistance,
  getHaversineBearing,
  isStateNameValid,
  getUsStateRecords,
} from "state-economy-game-util/util";
import { CheckedHttpError } from "state-economy-game-util/model";
import { MAX_GUESSES, TARGET_STATE_RETENTION } from "state-economy-game-util/constants";
import stateEconomies from "./stateEconomies";

const getTargetStateRecord = async () => StateRecord.of((await getTargetStateModel()).targetStateName);

export const postGameId = async (_req: Request, res: Response) => {
  const newUUID = randomUUID();
  const gameId: GameId = await GameIdModel.create({
    id: newUUID,
    attempts: 0,
  });
  res.status(201).json(gameId);
};

export const getTargetStateEconomy = async (_req: Request, res: Response, next: NextFunction) => {
  const targetStateModel = await getTargetStateModel();
  if (!targetStateModel) throw new Error("Target state not found");

  const targetStateEconomy = getEconomyNode(targetStateModel.targetStateName);
  if (!targetStateEconomy) throw new Error("Target economy state not found");

  const responseBody: EconomyResponse = {
    economy: targetStateEconomy,
    totalGdp: targetStateModel.targetStateGdp,
  };
  res.status(200).json(responseBody);
};

export const postGuessSubmission = async (req: Request, res: Response, next: NextFunction) => {
  const { id, guessStateName, requestTimestamp } = req.body as GuessSubmissionRequest;
  if (!id || !guessStateName || !requestTimestamp) {
    return next(CheckedHttpError.of("Request must contain and id, a state name, and a request timestamp ", 400));
  }

  const gameId = await GameIdModel.findOne({ where: { id: id } });
  if (!isStateNameValid(guessStateName) || !gameId) {
    return next(CheckedHttpError.of("Game id and a guess state name must both be valid", 422));
  } else if (gameId.attempts >= MAX_GUESSES) {
    return next(CheckedHttpError.of("Too many request have been made for this game", 422));
  } else if (requestTimestamp === gameId.lastRequestTimestamp) {
    return next(CheckedHttpError.of("Duplicate of successful request", 422));
  }

  const targetStateRecord = await getTargetStateRecord();
  const distance = getHaversineDistance(StateRecord.of(guessStateName), targetStateRecord);

  const maxDistance = getUsStateRecords()
    .map((stateRecord: StateRecord) => getHaversineDistance(stateRecord, targetStateRecord))
    .reduce((acc, cur) => {
      if (cur > acc) return cur;
      else return acc;
    }, 0);

  const responseBody: GuessSubmissionResponse = {
    id: id,
    distance: distance,
    bearing: getHaversineBearing(StateRecord.of(guessStateName), targetStateRecord),
    percentileScore: Math.round((1 - distance / maxDistance) * 100),
  };

  await GameIdModel.update(
    { attempts: gameId.attempts + 1, lastRequestTimestamp: requestTimestamp },
    { where: { id: id } }
  );
  res.status(201).json(responseBody);
};

export const getPuzzleAnswer = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  if (!id) {
    return next(CheckedHttpError.of("Request must contain a game id", 400));
  }

  const gameId = await GameIdModel.findOne({ where: { id: id } });
  if (!gameId) {
    return next(CheckedHttpError.of("Game id must be valid", 422));
  } else if (gameId?.attempts < MAX_GUESSES) {
    return next(CheckedHttpError.of(`${MAX_GUESSES} guesses must be made before answer can be requested`, 422));
  }
  const record = await getTargetStateRecord();
  const responseBody: PuzzleAnswerResponse = {
    id: id,
    targetStateName: record.name,
  };
  res.status(200).json(responseBody);
};

export const getHealthCheck = (_req: Request, res: Response) => {
  return res.status(200).json({ status: "UP" });
};

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CheckedHttpError) {
    res.status(err.httpCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: "HTTP response code 500: server error" });
  }
};

export const handleUnhandledRoute = (req: Request, res: Response) => {
  res.status(404).json({ message: "HTTP response code 404: route not handled" });
};

const getTargetStateModel = async () => {
  const targetStateModel = await TargetStateModel.findOne({order: [['id', 'DESC']]});
  if (!targetStateModel) throw new Error("Target state not found");
  return targetStateModel;
};

export const runDailyTasks = (appLogPath: string) => {
  return async () => {
    const obsoleteDate = new Date();
    obsoleteDate.setDate(obsoleteDate.getDate() - 1);

    const deletedGameIdCount = await GameIdModel.destroy({
      where: {
        createdAt: {
          [Op.lt]: obsoleteDate,
        },
      },
    });
    //console.log(`Obsolete GameIds deleted: ${deletedGameIdCount}`);
    logToAppLog(`Obsolete GameIds deleted: ${deletedGameIdCount}`, appLogPath);

    deleteObsoleteTargetStates(appLogPath);

    const unselectableTargetStateNames = (await TargetStateModel.findAll({ attributes: ["targetStateName"] })).map(
      (targetStateModel: TargetStateModel) => targetStateModel.targetStateName
    );
    const selectableTargetStates = getUsStateRecords().filter((stateRecord: StateRecord) => !unselectableTargetStateNames.includes(stateRecord.name));
    const newTargetState = selectableTargetStates.at(getRandomInt(selectableTargetStates.length));
    if (!newTargetState) return new Error("Failure to create new target state");

    const newEconomyNode = getEconomyNode(newTargetState.name);
    if (!newEconomyNode)
      return new Error(`Failure to find economy records for new target state '${newTargetState.name}'`);

    await TargetStateModel.create({
      id: (await TargetStateModel.count()) + 1,
      targetStateName: newTargetState?.name,
      targetStateGdp: getRoundedTotalGdp(newEconomyNode),
    });
    //console.log(`New target state: ${newTargetState?.name}`);
    logToAppLog(`New target state: ${newTargetState?.name}`, appLogPath);
  }
};

function logToAppLog(appLogPath: string,  record: string) {
  fs.writeFileSync(`${appLogPath}\n`, record, {flag: "a+"})
}

async function deleteObsoleteTargetStates(appLogPath: string): Promise<void> {
  const targetStateCount = await TargetStateModel.count();
  // This makes an assumption that `id` values descend with row age
  const obsoleteStateModelCount = targetStateCount - TARGET_STATE_RETENTION + 1;
  if (obsoleteStateModelCount > 0) {
    const deletedTargetStateCount = await TargetStateModel.destroy({
      where: {
        id: {
          [Op.lte]: obsoleteStateModelCount,
        },
      },
    });
    //console.log(`Obsolete target states deleted: ${deletedTargetStateCount}`);
    logToAppLog(`Obsolete target states deleted: ${deletedTargetStateCount}`, appLogPath);
  
    const updatedStateModelCount = await TargetStateModel.update(
      { id: Sequelize.literal(`id - ${obsoleteStateModelCount}`) }, { where: {} }
    )
    //console.log(`Updated target state rows: ${updatedStateModelCount}`)
    logToAppLog(`Updated target state rows: ${updatedStateModelCount}`, appLogPath)
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getEconomyNode(stateName: string) {
  if (stateName in stateEconomies) return stateEconomies[stateName];
  else return null;
}

function getRoundedTotalGdp(economy: NonLeafEconomyNode): number {
  return Math.round(getTotalGdp(economy));
}

function getTotalGdp(economy: NonLeafEconomyNode | LeafEconomyNode): number {
  if ("children" in economy) {
    return economy.children.map((node) => getTotalGdp(node)).reduce((prev, cur) => prev + cur, 0);
  } else {
    return economy.gdp;
  }
}
