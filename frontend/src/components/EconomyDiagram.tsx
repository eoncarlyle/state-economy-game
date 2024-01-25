import { useEffect, useState } from "preact/hooks";
import Grid from "@mui/material/Grid";

import { EconomyResponse } from "state-economy-game-util/model";
import { getTargetStateEconomy } from "../util/rest";
import { priceNumberFormat } from "../util/format";
import { EconomyTreemap } from "./EconomyTreemap";

export default function EconomyDiagram() {
  const [economyResponse, setEconomyResponse] = useState<EconomyResponse | null>(null);

  useEffect(() => {
    getTargetStateEconomy().then((response: EconomyResponse | null) => {
      if (response) setEconomyResponse(response);
      else {
        console.log("Failure to fetch state economy");
      }
    });
  }, [setEconomyResponse]);


  if (economyResponse)
    return (
      //@ts-ignore
      <Grid container className="economy-diagram-container" direction="column">
        <h4>Total GDP: { priceNumberFormat(economyResponse.totalGdp) }</h4>
          {/* @ts-ignore */}
        <EconomyTreemap data={economyResponse.economy} />
      </Grid>
    );
  else return <></>;
}
