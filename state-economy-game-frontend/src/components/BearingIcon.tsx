import { North, NorthEast, East, SouthEast, South, SouthWest, West, NorthWest } from "@mui/icons-material";

export default function BearingIcon({ bearing }: { bearing: number}) {
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
