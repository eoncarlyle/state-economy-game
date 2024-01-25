import { useEffect, useState } from "preact/hooks";
import Grid from "@mui/material/Grid";

import { EconomyNode } from "state-economy-game-util/model";
import { getTargetStateEconomy } from "../util/rest";
import { EconomyTreemap } from "./EconomyTreemap";

export default function EconomyDiagram() {
  const [economyNode, setEconomyNode] = useState<EconomyNode | null>(null);

  useEffect(() => {
    getTargetStateEconomy().then((economy: EconomyNode | null) => {
      if (economy) setEconomyNode(economy);
      else {
        console.log("Failure to fetch state economy");
        setEconomyNode(economy);
      }
    });
  }, [setEconomyNode]);

  if (economyNode)
    return (
      //@ts-ignore
      <Grid container className="economy-diagram-container">
        {/* @ts-ignore */}
        <Grid item s={6}>
          {/* @ts-ignore */}
          <EconomyTreemap data={economyNode} />
        </Grid>
      </Grid>
    );
  else return <></>;
}
