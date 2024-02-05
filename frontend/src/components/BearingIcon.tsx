
import NorthIcon from "../assets/north.svg"
import NorthEastIcon from "../assets/northEast.svg"
import EastIcon from "../assets/east.svg"
import SouthEastIcon from "../assets/southEast.svg"
import SouthIcon from "../assets/south.svg"
import SouthWestIcon from "../assets/southWest.svg"
import WestIcon from "../assets/west.svg"
import NorthWestIcon from "../assets/northWest.svg"


export default function BearingIcon({ bearing }: { bearing: number}) {
  const cutoff = 45 / 2; 
  if (0 <= bearing && bearing < cutoff) return <img src={NorthIcon} alt="North"/>;
  else if (cutoff <= bearing && bearing < 90 - cutoff) return <img src={NorthEastIcon} alt="North East"/>;
  else if (90 - cutoff <= bearing && bearing < 90 + cutoff) return <img src={EastIcon} alt="East"/>;
  else if (90 + cutoff <= bearing && bearing < 180 - cutoff) return <img src={SouthEastIcon} alt="South East"/>;
  else if (180 - cutoff <= bearing && bearing < 180 + cutoff) return <img src={SouthIcon} alt="South"/>;
  else if (180 + cutoff <= bearing && bearing < 270 - cutoff) return <img src={SouthWestIcon} alt="South West"/>;
  else if (270 - cutoff <= bearing && bearing < 270 + cutoff) return <img src={WestIcon} alt="West"/>;
  else if (270 + cutoff <= bearing && bearing < 360 - cutoff) return <img src={NorthWestIcon} alt="North West"/>;
  else return <img src={NorthIcon} alt="North"/>;
}
