import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

import SquareIcon from "@mui/icons-material/Square";

import { PieChartRecord } from "state-economy-game-util/model";
import { pieColours } from "state-economy-game-util/util";

export default function TableLegend({
  pieChartSeries,
  showHeader = true,
}: {
  pieChartSeries: Array<PieChartRecord>;
  showHeader?: boolean;
}) {
  const legendRows = [];

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
    //@ts-ignore
    <Table className="guesses">
      {/* @ts-ignore */}
      {showHeader && (
        <TableHead>
          {/* @ts-ignore */}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {/* @ts-ignore */}
        </TableHead>
      )}
      {/* @ts-ignore */}
      <TableBody>{legendRows}</TableBody>
      {/* @ts-ignore */}
    </Table>
  );
}
