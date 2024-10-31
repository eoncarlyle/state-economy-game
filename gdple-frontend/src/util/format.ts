export function priceNumberFormat(argument: number) {
  if (argument > 1_000_000) {
    return `\$${Number(argument / 1_000_000).toFixed(1)} T`;
  } else if (argument > 1_000) {
    return `\$${Number(argument / 1_000).toFixed(1)} B`;
  } else {
    return `\$${Number(argument).toFixed(1)} M`;
  }
}

export const getDistanceLabel = (distance: number) => {
  return `${Math.round(distance)} mi`;
};
