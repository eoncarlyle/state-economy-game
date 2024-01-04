import { useContext } from "preact/hooks";
import { Table, TableBody, TableCell, TableRow, Grid, TableHead } from "@mui/material";

import { getPieChartSeries, pieColours } from "../util/util";
import TargetStateRecord from "../util/TargetStateRecordContext";
import { PieChart } from "@mui/x-charts/PieChart";
import SquareIcon from "@mui/icons-material/Square";

export default function EconomyDiagram() {
  const pieChartSeries = getPieChartSeries(useContext(TargetStateRecord));
  const legendRows = [];
  const size = 400;

  //TODO: Understand, fix typing issues requiring the @ts-ignore comments
  //! Implicit assumption that you have as many colours as categories
  for (let index = 0; index < pieChartSeries.length; index++) {
    legendRows.push(
      // @ts-ignore
      <TableRow>
        <TableCell>
          {/* @ts-ignore */}
          <SquareIcon sx={{ color: pieColours[index] }} />
        </TableCell>
        <TableCell>{pieChartSeries.at(index)?.label}</TableCell>
      </TableRow>
    );
  }

  return (
    <Grid container className="economy-diagram-container">
      <Grid item s={6}>
        <PieChart
          colors={pieColours}
          tooltip={{ trigger: "none" }}
          series={[
            {
              data: pieChartSeries,
              cx: size / 2,
              cy: size / 2,
            },
          ]}
          width={size}
          height={size}
          slotProps={{ legend: { hidden: true } }}
        />
      </Grid>
      <Grid item s={6}>
        <Table className="guess-input-container">
          {/* @ts-ignore */}
          <TableHead>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableHead>
          <TableBody>{legendRows}</TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
