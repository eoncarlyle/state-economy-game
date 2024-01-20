import { red, blue, cyan, green, orange, grey } from "@mui/material/colors";

import { StateRecord, PieChartRecord, StateEconomy } from "./model";
import stateRecordList from "./UsStates";
import haversineDistance, { haversineBearing } from "./haversine";

const topCategoriesNumber = 5;
//TODO Implicit dependency on colours.size > topCategoriesNumber, there is a better way to do this
export const pieColours = [red[500], blue[500], cyan[500], green[500], orange[500], grey[500]];

const conversion = {
  naics11: "Agriculture, Forestry, Fishing and Hunting",
  naics21: "Mining, Quarrying, and Oil and Gas Extraction",
  naics22: "Utilities",
  naics23: "Construction",
  naics31: "Manufacturing",
  naics42: "Wholesale trade",
  naics44: "Retail trade",
  naics48: "Transportation and warehousing",
  naics51: "Information",
  naics52: "Finance, Insurance, and Real Estate",
  naics54: "Professional and Business Services",
  naics61: "Education and Health Services",
  naics71: "Leisure and Hospitality",
  naics81: "Other Non-Government Services",
  govCivil: "Federal Civilian",
  govMil: "Military",
  govStateLocal: "State and Local",
};

export function getPieChartSeries(economy: StateEconomy): Array<PieChartRecord> {
  const rankedStateRecords: PieChartRecord[] = Object.entries(economy)
    .map((entry: [string, number]) => {
      return { label: entry[0], value: entry[1] };
    })
    .sort((a, b) => a.value - b.value)
    .reverse();

  const topStateRecordCategory = rankedStateRecords.slice(0, topCategoriesNumber);

  const labels: string[] = topStateRecordCategory
    .map((entry) => convertStateEconomyLabel(entry.label))
    .concat("Others");

  const data: number[] = topStateRecordCategory
    .map((entry) => entry.value)
    .concat(rankedStateRecords.slice(topCategoriesNumber).reduce((acc, curr) => acc + curr.value, 0));

  const pieChartSeries = [];
  for (let i = 0; i < topStateRecordCategory.length + 1; i++) pieChartSeries.push({ label: labels[i], value: data[i] });

  return pieChartSeries;
}

export const getUsStateRecords = () => stateRecordList

export const getUsStateRecord = (stateName: string) =>
  stateRecordList.find((stateRecord: StateRecord) => stateRecord.name === stateName);

export const isStateNameValid = (stateName: string) => {
  return (getUsStateRecord(stateName) && true) 
}

export const getHaversineFormat = (stateRecord: StateRecord) => {
  return { latitude: stateRecord.latitudeN, longitude: -1 * stateRecord.longitudeW };
};

export const getDistanceLabel = (distance: number) => {
  return `${Math.round(distance)} mi`;
};

export const getHaversineDistance = (startStateRecord: StateRecord, endStateRecord: StateRecord) => {
  return Math.round(haversineDistance(getHaversineFormat(startStateRecord), getHaversineFormat(endStateRecord)));
};

export const getHaversineBearing = (startStateRecord: StateRecord, endStateRecord: StateRecord) => {
  return Math.round(haversineBearing(getHaversineFormat(startStateRecord), getHaversineFormat(endStateRecord)));
};

export function convertStateEconomyLabel(shortLabel: string): string {
  if (!Object.keys(conversion).includes(shortLabel))
    //TODO: Fix error states
    throw new Error();
  // @ts-ignore
  return conversion[shortLabel] as string;
}