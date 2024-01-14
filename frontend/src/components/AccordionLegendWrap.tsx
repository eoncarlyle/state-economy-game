import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordionLegendWrap({ children }: { children: React.ReactNode }) {
  return (
    // @ts-ignore
    <Accordion variant="outlined" className="accordion-legend">
      <AccordionSummary expandIcon={(<ArrowDropDownIcon />) as React.ReactNode}>Chart Legend</AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
