import { useContext } from "preact/hooks";
import { Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import useMediaQuery from "@mui/material/useMediaQuery";

import { getPieChartSeries, pieColours } from "../util/util";
import TargetStateRecord from "../util/TargetStateRecordContext";
import TableLegend from "./TableLegend";
import AccordionLegendWrap from "./AccordionLegendWrap";
import React from "react";
import { PIE_CHART_SIZE, LEGEND_AUTOHIDE_WIDTH } from "../config";

export default function EconomyDiagram() {
  const pieChartSeries = getPieChartSeries(useContext(TargetStateRecord));
  const isFullScreen = useMediaQuery(`(min-width:${LEGEND_AUTOHIDE_WIDTH}px)`);

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
              cx: PIE_CHART_SIZE / 2,
              cy: PIE_CHART_SIZE / 2
            }
          ]}
          width={PIE_CHART_SIZE}
          height={PIE_CHART_SIZE}
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
}
