import { NextFunction, Request, Response } from "express";
import { randomUUID } from "crypto";
import { Op, DataTypes, Sequelize } from "sequelize";

import {
  StateRecord,
  GameId,
  GuessSubmissionResponse,
  GuessSubmissionRequest,
  PuzzleAnswerResponse,
} from "state-economy-game-util/model";
import { GameIdModel, TargetStateModel } from "./persistentModel";
import {
  getHaversineDistance,
  getHaversineBearing,
  isStateNameValid,
  getUsStateRecords,
} from "state-economy-game-util/util";
import { CheckedHttpError } from "state-economy-game-util/model";
import { MAX_GUESSES } from "state-economy-game-util/constants";


export const getTargetStateRecord = async () => StateRecord.of(await getTargetStateName());

export const postGameId = async (_req: Request, res: Response) => {
  const newUUID = randomUUID();
  const gameId: GameId = await GameIdModel.create({
    id: newUUID,
    attempts: 0,
  });
  res.status(201).json(gameId);
};

//TODO: determine which state-economy-game-util methods/data should no longer be there for security/cheating purposes
export const getTargetStateEconomy = async (_req: Request, res: Response) => {
  const record = await getTargetStateRecord();
  res.status(200).json(record.economy);
};

export const postGuessSubmission = async (req: Request, res: Response, next: NextFunction) => {
  const { id, guessStateName } = req.body as GuessSubmissionRequest;
  if (!id || !guessStateName) {
    return next(CheckedHttpError.of("Request must contain both a game id and a guess state name", 400));
  }
  const gameId = await GameIdModel.findOne({ where: { id: id } });
  if (!isStateNameValid(guessStateName) || !gameId) {
    return next(CheckedHttpError.of("Game id and a guess state name must both be valid", 422));
  } else if (gameId.attempts >= MAX_GUESSES) {
    return next(CheckedHttpError.of("Too many request have been made for this game", 422));
  }

  const responseBody: GuessSubmissionResponse = {
    id: id,
    distance: getHaversineDistance(StateRecord.of(guessStateName), await getTargetStateRecord()),
    bearing: getHaversineBearing(StateRecord.of(guessStateName), await getTargetStateRecord()),
  };

  //@ts-ignore
  await GameIdModel.update({ attempts: gameId.attempts + 1 }, { where: { id: id } });
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

export const getTargetStateName = async () => {
  const targetStateModel = await TargetStateModel.findOne();
  if (!targetStateModel) throw new Error("TargetState not found");
  return targetStateModel.targetStateName;
};

export const runDailyTasks = async () => {
  const obsoleteDate = new Date();
  obsoleteDate.setDate(obsoleteDate.getDate() - 1);

  const obsoleteIdCount = await GameIdModel.destroy({
    where: {
      createdAt: {
        [Op.lt]: obsoleteDate,
      },
    },
  });
  console.log(`Obsolete GameIds removed: ${obsoleteIdCount}}`)
  
  await TargetStateModel.destroy({ truncate: true });
  const newTargetState = getUsStateRecords().at(getRandomInt(getUsStateRecords().length));
  if (!newTargetState) return new Error("Failure to create new target state")
  await TargetStateModel.create({
    id: 1,
    targetStateName: newTargetState?.name,
  });
  console.log(`New target state: ${newTargetState?.name}`)
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
