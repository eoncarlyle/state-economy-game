import { getUsStateRecord } from "./util";

export interface StateEconomy {
  naics11: number;
  naics21: number;
  naics22: number;
  naics23: number;
  naics31: number;
  naics42: number;
  naics44: number;
  naics48: number;
  naics51: number;
  naics52: number;
  naics54: number;
  naics61: number;
  naics71: number;
  naics81: number;
  govCivil: number;
  govMil: number;
  govStateLocal: number;
}

export interface PieChartRecord {
  label: string;
  value: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export class StateRecord {
  name: string;
  economy: StateEconomy;
  latitudeN: number;
  longitudeW: number;

  constructor(name: string, economy: StateEconomy, latitudeN: number, longitudeW: number) {
    this.name = name;
    this.economy = economy;
    this.latitudeN = latitudeN;
    this.longitudeW = longitudeW;
  }

  static of(name: string) {
    const record = getUsStateRecord(name);
    if (record === undefined)
      throw new Error("Invalid state")
    return record
  }
}

export interface Guess {
  stateRecord: StateRecord;
  distance: number;
  bearing: number;
  percentileScore: number;
}

export interface GameState {
  id: string;
  guesses: Array<Guess>;
  currentGuessName: string | null;
  isWin: boolean;
  showAnswer: boolean;
  showShareableResultMessage: boolean;
}

export interface GameEntry {
  isWin: boolean;
  id: string;
  guesses: Array<Guess>;
}

export interface GameHistory {
  [key: string]: GameEntry
}

export interface GameId {
  id: string;
  attempts: number;
}

export interface GuessSubmissionRequest {
  id: string;
  guessStateName: string;
}

export interface GuessSubmissionResponse {
  id: string;
  distance: number;
  bearing: number;
  percentileScore: number;
}

export interface PuzzleAnswerRequest {
  id: string;
}

export interface PuzzleAnswerResponse {
  id: string;
  targetStateName: string;
}

export class CheckedHttpError extends Error {
  httpCode: number;
  constructor(message: string, httpCode: number) {
    super(message)
    this.httpCode = httpCode
  }
  static of(message: string, httpCode: number) {
    return new CheckedHttpError(message, httpCode)
  }
}

export class CheckedHttpErrorResponse {
  message: string;
  httpCode: number;
  constructor(message: string, httpCode: number) {
    this.message = message
    this.httpCode = httpCode
  }
  static of(message: string, httpCode: number) {
    return new CheckedHttpErrorResponse(message, httpCode)
  }
}

export interface UncheckedHttpErrorResponse {
  message: string;
  httpCode?: number;
}