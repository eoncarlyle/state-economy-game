//TODO there is a way to define a `svg` component and define children props but I've forgotten
// How to do this and am on a plane

import BaseIcon from "./BaseIcon.tsx";

export const SvgNorth = () => {
  //</svg>
  return (
    <BaseIcon>
      <path d="m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"></path>
    </BaseIcon>
  );
};

export const SvgNorthEast = () => {
  return (
    <BaseIcon>
      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
    </BaseIcon>
  );
};

export const SvgEast = () => {
  return (
    <BaseIcon>
      <path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"></path>
    </BaseIcon>
  );
};

export const SvgSouthEast = () => {
  return (
    <BaseIcon>
      <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z"></path>
    </BaseIcon>
  );
};

export const SvgSouth = () => {
  return (
    <BaseIcon>
      <path d="m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"></path>
    </BaseIcon>
  );
};

export const SvgSouthWest = () => {
  //return <svg className={"icon-svg"}>
  return (
    <BaseIcon>
      {" "}
      <path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z"></path>{" "}
    </BaseIcon>
  );
  //</svg>
};

export const SvgWest = () => {
  //return <svg className={"icon-svg"}>
  return (
    <BaseIcon>
      <path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7z"></path>
    </BaseIcon>
  );
  //</svg>
};

export const SvgNorthWest = () => {
  return (
    <BaseIcon>
      <path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5z"></path>
    </BaseIcon>
  );
};

export default function BearingIcon({ bearing }: { bearing: number }) {
  const cutoff = 45 / 2;
  if (0 <= bearing && bearing < cutoff) return <SvgNorth />;
  else if (cutoff <= bearing && bearing < 90 - cutoff) return <SvgNorthEast />;
  else if (90 - cutoff <= bearing && bearing < 90 + cutoff) return <SvgEast />;
  else if (90 + cutoff <= bearing && bearing < 180 - cutoff)
    return <SvgSouthEast />;
  else if (180 - cutoff <= bearing && bearing < 180 + cutoff)
    return <SvgSouth />;
  else if (180 + cutoff <= bearing && bearing < 270 - cutoff)
    return <SvgSouthWest />;
  else if (270 - cutoff <= bearing && bearing < 270 + cutoff)
    return <SvgWest />;
  else if (270 + cutoff <= bearing && bearing < 360 - cutoff)
    return <SvgNorthWest />;
  else return <SvgNorth />;
}
