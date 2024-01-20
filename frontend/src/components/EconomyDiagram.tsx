import { useEffect, useState } from "preact/hooks";
import { Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import useMediaQuery from "@mui/material/useMediaQuery";

import { getPieChartSeries, pieColours } from "state-economy-game-util/util"

import TableLegend from "./TableLegend";
import AccordionLegendWrap from "./AccordionLegendWrap";
import React from "react";
import { PieChartRecord, StateEconomy } from "state-economy-game-util/model";
import { getTargetStateEconomy } from "../util/rest";

export default function EconomyDiagram() {
  //TODO: Place these somewhere better
  const pieChartSize = 400;
  const legendAutohideWidth = 740;
  const isFullScreen = useMediaQuery(`(min-width:${legendAutohideWidth}px)`);
  const [pieChartSeries, setPieChartSeries] = useState<Array<PieChartRecord> | null>(null);

  useEffect(() => { 
    getTargetStateEconomy()
      .then((economy: StateEconomy | null) => {
        if (economy)
          setPieChartSeries(getPieChartSeries(economy))
        else {
          console.log("Failure to fetch state economy")
          setPieChartSeries(economy)
        }
      })
  }, [setPieChartSeries])

  if (pieChartSeries)
    return (
      //@ts-ignore
      <Grid container className="economy-diagram-container">
        <Grid item s={6}>
          {/* @ts-ignore */}
          <PieChart
            colors={pieColours}
            tooltip={{ trigger: "none" }}
            series={[
              {
                data: pieChartSeries,
                cx: pieChartSize / 2,
                cy: pieChartSize / 2
              }
            ]}
            width={pieChartSize}
            height={pieChartSize}
            slotProps={{ legend: { hidden: true } }}
          />
        </Grid>
        <Grid item s={6}>
          {/* @ts-ignore */}
          {isFullScreen ? (
            <TableLegend pieChartSeries={pieChartSeries} />
          ) : (
            <AccordionLegendWrap>
              {(<TableLegend pieChartSeries={pieChartSeries} showHeader={false} />) as React.ReactNode}
            </AccordionLegendWrap>
          )}
        </Grid>
      </Grid>
    );
  else return <></>;
}
