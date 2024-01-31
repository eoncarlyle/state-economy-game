import { getUsStateRecord } from "./util";


export interface Coordinates {
  latitude: number;
  longitude: number;
}

export class StateRecord {
  name: string;
  latitudeN: number;
  longitudeW: number;

  constructor(name: string, latitudeN: number, longitudeW: number) {
    this.name = name;
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

export interface StateEconomies {
  [key: string]: NonLeafEconomyNode
}

export interface NonLeafEconomyNode {
  gdpCategory: string; 
  children: Array<NonLeafEconomyNode | LeafEconomyNode>;
}

export interface LeafEconomyNode {
  gdpCategory: string;
  gdp: number;
}

export interface InternalEconomyNode {
  gdpCategory: string; 
  gdp?: number;
  children?: Array<InternalEconomyNode>;
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

export interface EconomyResponse {
  economy: NonLeafEconomyNode;
  totalGdp: number;
}

export interface GuessSubmissionRequest {
  id: string;
  guessStateName: string;
  requestTimestamp: number;
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
