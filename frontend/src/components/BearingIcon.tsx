import { North, NorthEast, East, SouthEast, South, SouthWest, West, NorthWest } from "@mui/icons-material";
import { StateRecord } from "../model/model";
import { haversineBearing } from "../util/haversine";
import { getHaversineFormat } from "../util/util";

type BearingIconProps = {
  startStateRecord: StateRecord;
  endStateRecord: StateRecord;
};

export default function BearingIcon({ startStateRecord, endStateRecord }: BearingIconProps) {
  const bearing = haversineBearing(getHaversineFormat(startStateRecord), getHaversineFormat(endStateRecord));
  const cutoff = 45 / 2; 
  if (0 <= bearing && bearing < cutoff) return <North />;
  else if (cutoff <= bearing && bearing < 90 - cutoff) return <NorthEast />;
  else if (90 - cutoff <= bearing && bearing < 90 + cutoff) return <East />;
  else if (90 + cutoff <= bearing && bearing < 180 - cutoff) return <SouthEast />;
  else if (180 - cutoff <= bearing && bearing < 180 + cutoff) return <South />;
  else if (180 + cutoff <= bearing && bearing < 270 - cutoff) return <SouthWest />;
  else if (270 - cutoff <= bearing && bearing < 270 + cutoff) return <West />;
  else if (270 + cutoff <= bearing && bearing < 360 - cutoff) return <NorthWest />;
  else return <North />;
}
