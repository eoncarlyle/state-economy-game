import { Dispatch, StateUpdater } from "preact/hooks";

import { getUsStateRecord } from "./util.ts";

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
    if (record === undefined) throw new Error("Invalid state");
    return record;
  }
}

export interface NonLeafEconomyNode {
  gdpCategory: string;
  children: Array<NonLeafEconomyNode | LeafEconomyNode>;
}

export interface LeafEconomyNode {
  gdpCategory: string;
  gdp: number;
}

export interface StateEconomy {
  economy: NonLeafEconomyNode;
  totalGdp: number;
}

export interface Guess {
  stateRecord: StateRecord;
  bearing: number;
  gdpRatio: number;
  isWin: boolean;
}

export interface GameState {
  id: string;
  guesses: Array<Guess>;
  currentGuessName: string | null;
  isWin: boolean;
  showAnswer: boolean;
  showShareableResultMessage: boolean;
}

export interface PuzzleHistoryEntry {
  isWin: boolean;
  id: string;
  guesses: Array<Guess>;
}

export interface PuzzleHistory {
  [key: string]: PuzzleHistoryEntry;
}

export interface IPuzzleSession {
  id: string;
}

export interface GuessSubmissionRequest {
  id: string;
  guessStateName: string;
  requestTimestamp: number;
}

export interface GuessSubmissionResponse {
  id: string;
  bearing: number;
  gdpRatio: number;
  isWin: boolean;
}

export interface PuzzleAnswerRequest {
  id: string;
}

export interface PuzzleAnswerResponse {
  id: string;
  targetStateName: string;
}

export interface GoneResponse {
  message: string;
  statusCode: 410;
  type: "GoneResponse";
}

export interface GlobalState {
  gameState: GameState | null;
  economyResponse: StateEconomy | null;
}

export interface CachedEconomy {
  stateEconomy: StateEconomy;
  referenceDateString: string;
}
