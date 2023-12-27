import { ReactNode } from "preact/compat";
import { Grid } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function GuessRowItem({ children }: { children: ReactNode }) {
  return <Grid item>
    { children }
  </Grid>;
}
