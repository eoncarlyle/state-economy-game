import { PureComponent } from "preact/compat";
import renderTreemap from "./util"

export class D3Component extends PureComponent {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    renderTreemap()
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
