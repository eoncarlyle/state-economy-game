import { StateRecord, PieChartData } from "./Model";
import { Chart } from "react-google-charts";
import { render } from "preact";

//export default function EconomyPie({ economy }: { economy: StateEconomy }) {
export default function EconomyPie({ pieChartData }: { pieChartData: PieChartData }) {
  const chart = render(<Chart chartType="PieChart" data={pieChartData}/>);
}
export function MyFunction() {

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  return (
    <Chart
      chartType="PieChart"
      data={data}
    />
  );
}
