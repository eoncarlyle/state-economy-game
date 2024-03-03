import { StateRecord } from "./model";
import stateRecordList from "./UsStates";
import haversineDistance, { haversineBearing } from "./haversine";

export const getUsStateRecords = () => stateRecordList;

export const getUsStateRecord = (stateName: string) =>
  stateRecordList.find(
    (stateRecord: StateRecord) => stateRecord.name === stateName,
  );

export const isStateNameValid = (stateName: string) => {
  return getUsStateRecord(stateName) && true;
};

export const getHaversineFormat = (stateRecord: StateRecord) => {
  return {
    latitude: stateRecord.latitudeN,
    longitude: -1 * stateRecord.longitudeW,
  };
};

export const getDistanceLabel = (distance: number) => {
  return `${Math.round(distance)} mi`;
};

export const getHaversineDistance = (
  startStateRecord: StateRecord,
  endStateRecord: StateRecord,
) => {
  return Math.round(
    haversineDistance(
      getHaversineFormat(startStateRecord),
      getHaversineFormat(endStateRecord),
    ),
  );
};

export const getHaversineBearing = (
  startStateRecord: StateRecord,
  endStateRecord: StateRecord,
) => {
  return Math.round(
    haversineBearing(
      getHaversineFormat(startStateRecord),
      getHaversineFormat(endStateRecord),
    ),
  );
};
