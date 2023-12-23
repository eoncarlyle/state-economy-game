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

export interface StateRecord {
  name: string;
  economy: StateEconomy;
}

export type PieChartData = (string | number)[][];
