import { PureComponent } from "preact/compat";

import renderTreemap from "../util/renderEconomyTreemap";

import { NonLeafEconomyNode } from "../util/model.ts";

interface EconomyTreemapProps {
  data: NonLeafEconomyNode;
}

export class EconomyTreemap extends PureComponent<EconomyTreemapProps> {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { data } = this.props;
    renderTreemap(data);
  }

  render() {
    return (
      <>
        <div id="container"></div>
        <div id="tooltip-container" class="tooltip-container">
          <div id="tooltip-category" class="tooltip-item"></div>
          <div id="tooltip-parent" class="tooltip-item"></div>
          <div id="tooltip-quantity" class="tooltip-item"></div>
        </div>
      </>
    );
  }
}
