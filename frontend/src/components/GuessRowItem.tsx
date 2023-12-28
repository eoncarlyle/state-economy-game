import { ReactNode } from "preact/compat";
import { Grid } from "@mui/material";

export default function GuessRowItem({ children, columns }: { children: ReactNode; columns: number }) {
  return <Grid columns={columns}>{children}</Grid>;
}
