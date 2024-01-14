import { Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";

import { PieChartRecord } from "../model/model";
import { pieColours } from "../util/util";

export default function TableLegend({ pieChartSeries, showHeader = true }: { pieChartSeries: Array<PieChartRecord>, showHeader?: boolean }) {
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
      { showHeader &&
        <TableHead>
          {/* @ts-ignore */}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {/* @ts-ignore */}
        </TableHead>
      }
      {/* @ts-ignore */}
      <TableBody>{legendRows}</TableBody>
      {/* @ts-ignore */}
    </Table>
  );
}
