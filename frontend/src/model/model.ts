import UsStates from "../data/UsStates.json";
import { getUsStateRecord } from "../util/util";

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
