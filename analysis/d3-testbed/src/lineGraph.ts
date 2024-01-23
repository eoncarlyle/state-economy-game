import * as d3 from "d3";
import data from "./data";
import { EconomyNode } from "./model";

export function lineGraph() {
  // Specify the color scale.
 

  const color = d3.scaleOrdinal(
    data.children.map((d) => d.gdpCategory),
    d3.schemeSet3
  );


  const width = 1500;
  const height = 1000;

  // Compute the layout.
  const root = d3
    .treemap()
    .tile(d3.treemapBinary) // e.g., d3.treemapSquarify
    .size([width, height])
    .padding(1)
    .round(true)(
    d3
      .hierarchy(data)
      .sum((d) => d.gdp)
      .sort((a, b) => b.gdp - a.gdp)
  );

  const svg = d3
    .select("#container")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto; font: 20px sans-serif;");

  // Add a cell for each leaf of the hierarchy.
  const leaf = svg
    .selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

  // Append a tooltip.
  const format = d3.format(",d");
  leaf.append("title").text((d) => d.gdpCategory);

  // Append a color rectangle.
  leaf
    .append("rect")
    .attr("fill", (d) => {
      while (d.depth > 1) d = d.parent;
      return color(d.data.gdpCategory);
    })
    .attr("fill-opacity", 1)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("inline-size", (d) => d.x1 - d.x0)
  
  let count = 0;
  // Append a clipPath to ensure text does not overflow.
  
  leaf
    .append("text")
    .text((d) => d.data.gdpCategory.split(/(?=[A-Z][a-z])/g).concat(format(d.data.gdp)))
    .attr("x", d => 0.5*(d.x1 - d.x0))
    .attr("y", d => 0.5*(d.y1 - d.y0))
    .attr("dominant-baseline", "middle")
    .attr("text-anchor", "middle")
  
  // Append multiline text. The last line shows the value and has a specific formatting.
  //leaf
  //  .append("text")
  //    .attr("clip-path", d => d.clipUid)
  //  .selectAll("tspan")
  //  .data((d) => d.data.gdpCategory.split(/(?=[A-Z][a-z])/g).concat(format(d.data.gdp)))
  //  .join("tspan")
  //  .attr("x", 3)
  //  .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
  //  .attr("fill-opacity", (d, i, nodes) => (i === nodes.length - 1 ? 0.7 : null))
  //  .text((d) => d);
}
