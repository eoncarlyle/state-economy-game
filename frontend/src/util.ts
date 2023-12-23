import { StateRecord, PieChartData } from "./Model";

import Bea2021Sagdp2N from "./Bea2021Sagdp2N.json";
const stateRecordList: Array<StateRecord> = Bea2021Sagdp2N;
const topCategoriesNumber = 5;

interface StateRecordMod {
  label: string;
  value: number;
}

export function getStateRecord(stateRecordName: string): StateRecord {
  return stateRecordList.filter((stateRecord: StateRecord) => stateRecord.name === stateRecordName)[0];
}

export function getDataSet(stateRecord: StateRecord): PieChartData {
  var rankedStateRecords: StateRecordMod[] = Object.entries(stateRecord.economy)
    .map((entry) => {
      return { label: entry.at(0), value: entry.at(1) };
    })
    .sort((a, b) => a.value - b.value)
    .reverse();

  const topStateRecordCategory = rankedStateRecords.slice(0, topCategoriesNumber);
  const otherStateRecordTotal = rankedStateRecords
    .slice(topCategoriesNumber)
    .reduce((acc, curr) => acc + curr.value, 0);
  const labels: string[] = topStateRecordCategory.map((entry) => convertStateEconomyLabel(entry.label)).concat("Others");
  const data: number[] = topStateRecordCategory.map((entry) => entry.value).concat(otherStateRecordTotal);

  const pieChartData = [];
  for (let i = 0; i < topStateRecordCategory.length + 1; i++) {
    pieChartData.push([labels[i], data[i]])
  }
  return pieChartData;
}

export function convertStateEconomyLabel(shortLabel: string): string {
  const conversion = {
    naics11: "Agriculture, forestry, fishing and hunting",
    naics21: "Mining, quarrying, and oil and gas extraction",
    naics22: "Utilities",
    naics23: "Construction",
    naics31: "Manufacturing",
    naics42: "Wholesale trade",
    naics44: "Retail trade",
    naics48: "Transportation and warehousing",
    naics51: "Information",
    naics52: "Finance, insurance, real estate, rental, and leasing",
    naics54: "Professional and business services",
    naics61: "Educational services, health care, and social assistance",
    naics71: "Arts, entertainment, recreation, accommodation, and food services",
    naics81: "Other services (except government and government enterprises)",
    govCivil: "Federal civilian",
    govMil: "Military",
    govStateLocal: "State and local",
  };

  return conversion[shortLabel]
}
