import { priceNumberFormat } from "../util/format";
import { StateEconomy } from "../util/model.ts";
import { EconomyTreemap } from "./EconomyTreemap";

export default function EconomyDiagram(props: {
  stateEconomy: StateEconomy | null;
}) {
  const { stateEconomy } = props;
  if (stateEconomy)
    return (
      //@ts-ignore
      <div className="economy-diagram-container">
        <h4>Total 2023 GDP: {priceNumberFormat(stateEconomy.totalGdp)}</h4>
        {/* @ts-ignore */}
        <EconomyTreemap data={stateEconomy.economy} />
      </div>
    );
  else return <></>;
}
