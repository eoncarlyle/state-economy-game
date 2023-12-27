import { useContext } from "preact/hooks";

import { getPieChartSeries, pieColours } from "../util/util";
import TargetStateRecord from "../util/TargetStateRecordContext";
import { PieChart } from "@mui/x-charts/PieChart";
import SquareIcon from "@mui/icons-material/Square";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function EconomyPie() {
  const pieChartSeries = getPieChartSeries(useContext(TargetStateRecord));
  const tableRows = []

  //! Implicit assumption that you have as many colours as categories
  for (let index = 0; index < pieChartSeries.length; index++) {
    tableRows.push(
      <TableRow>
        <TableCell>
          <SquareIcon sx={{ color: pieColours[index] }} />
        </TableCell>
        <TableCell>
          { pieChartSeries.at(index)?.label }
        </TableCell>
      </TableRow>
    )}

  return (
    <>
      <PieChart
        colors={pieColours}
        tooltip={{ trigger: "none" }}
        series={[
          {
            data: pieChartSeries,
          },
        ]}
        height={400}
        slotProps={{ legend: { hidden: true } }}
      />
      <Table className="guess-input-container legend">
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </>
  );
}
