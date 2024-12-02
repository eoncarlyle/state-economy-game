import { priceNumberFormat } from "../util/format";
import { EconomyTreemap } from "./EconomyTreemap";
import { GlobalState } from "../util/model.ts";

export default function EconomyDiagram(props: GlobalState) {
  const { economyResponse } = props;

  if (economyResponse)
    return (
      //@ts-ignore
      <div className="economy-diagram-container">
        <h4>Total 2023 GDP: {priceNumberFormat(economyResponse.totalGdp)}</h4>
        {/* @ts-ignore */}
        <EconomyTreemap data={economyResponse.economy} />
      </div>
    );
  else return <></>;
}
