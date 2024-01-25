import { select, treemap, hierarchy, scaleOrdinal, schemeSet3, treemapBinary, format } from "d3";

export default function renderTreemap(data) {
  const color = scaleOrdinal(data.children.map((d) => d.gdpCategory), schemeSet3);

  const width = 500;
  const height = 400;
  const defaultFontSize = 10;

  const root = treemap().tile(treemapBinary).size([width, height]).padding(1).round(true)(
    hierarchy(data)
      .sum((d) => d.gdp)
      .sort((a, b) => b - a)
  );

  const svg = select("#container")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");

  const leaf = svg
    .selectAll("g")
    .data(root.leaves())
    .join("g").attr("transform", (d) => `translate(${d.x0},${d.y0})`);
    
  root.leaves().filter((d) => d.parent.data.gdpCategory === "Administrative and support and waste management and remediation services" )

  const tooltipContainer = select("#tooltip-container");
  const tooltipCategory = select("#tooltip-category");
  const tooltipParent = select("#tooltip-parent");
  const tooltipQuantity = select("#tooltip-quantity");

  const rectLabel = (count) => `rect-${count}`;
  const textLabel = (count) => `text-${count}`;
  const gdpFormat = format(",d")

  let count = 0;
  leaf
    .append("rect")
    .attr("id", (d) => rectLabel(count++))
    .attr("fill", (d) => {
      while (d.depth > 1) d = d.parent;
      return color(d.data.gdpCategory);
    })
    .attr("fill-opacity", 1)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("inline-size", (d) => d.x1 - d.x0);

  count = 0;
  leaf
    .append("text")
    .attr("id", (d) => textLabel(count++))
    .text((d) => d.data.gdpCategory)
    .attr("x", (d) => 0.5 * (d.x1 - d.x0))
    .attr("y", (d) => 0.5 * (d.y1 - d.y0))
    .attr("dominant-baseline", "middle")
    .attr("text-anchor", "middle")
    .attr("font-size", defaultFontSize)
    .attr("font-family", "sans-serif")
    .attr("fill", "#ffffff")
    .attr("class", "treemapRectangle");

  const positionTooltip = (leafData, event) => {
    tooltipCategory.text(`Category: ${leafData?.data.gdpCategory}`);
    tooltipParent.text(`Parent Category: ${leafData?.parent?.data.gdpCategory}`);
    tooltipQuantity.text(`Value: \$${gdpFormat(Math.round(leafData?.data.gdp))} M`);
    tooltipContainer.style("visibility", "visible");
    tooltipContainer.style("top", `${event.pageY - 10}px`).style("left", `${event.pageX + 10}px`);
  };

  for (let leafIndex = 0; leafIndex < root.leaves().length; leafIndex++) {
    const text = select(`#text-${leafIndex}`);
    const rect = select(`#rect-${leafIndex}`);
    const leafData = root.leaves().at(leafIndex);

    if (text.node().getComputedTextLength() > rect.node().width.baseVal.value) {
      text.attr("display", "none");
    } else {
      let size = defaultFontSize;
      while (text.node().getComputedTextLength() <= rect.node().width.baseVal.value) {
        text.attr("font-size", size++);
      }
      text.attr("font-size", size - 2);
    }

    rect
      .on("mouseover", function (event) {
        select(this).attr("stroke-width", "2").attr("stroke", "black").attr("fill-opacity", 0.5);
        positionTooltip(leafData, event);
      })
      .on("mousemove", function (event) {
        positionTooltip(leafData, event);
      })
      .on("mouseout", function () {
        select(this).attr("stroke-width", "0").attr("fill-opacity", 1);
        tooltipContainer.style("visibility", "hidden");
      });
  }
}