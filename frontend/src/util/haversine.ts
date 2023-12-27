import { Coordinates } from "../model/model";
// Adpated from njj/haversine package
// https://www.movable-type.co.uk/scripts/latlong.html

const rMile = 3960;

// convert to radians
const toRad = function (num: number) {
  return (num * Math.PI) / 180;
};

export default function haversineDistance(start: Coordinates, end: Coordinates) {
  const dLat = toRad(end.latitude - start.latitude); // \delta \phi
  const dLon = toRad(end.longitude - start.longitude); // \delta \lambda
  const lat1 = toRad(start.latitude);
  const lat2 = toRad(end.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return rMile * c;
}

export function haversineBearing(start: Coordinates, end: Coordinates) {
  const [phiStart, phiEnd] = [toRad(start.latitude), toRad(end.latitude)];
  const [lambdaStart, lambdaEnd] = [toRad(start.longitude), toRad(end.longitude)];

  const y = Math.sin(lambdaEnd - lambdaStart);
  const x =
    Math.cos(phiStart) * Math.sin(phiEnd) - Math.sin(phiStart) * Math.cos(phiEnd) * Math.cos(lambdaEnd - lambdaStart);
  return (Math.atan2(y, x)*180/Math.PI + 360) % 360
}
