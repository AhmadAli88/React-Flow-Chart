import { useState } from "react";
import { FlowChartWithState } from "@mrblenny/react-flow-chart";

const initialChart = {
  offset: { x: 0, y: 0 },
  nodes: {},
  links: {},
  selected: {},
  hovered: {},
};

function DynamicFlowChart() {
  const [chart, setChart] = useState(initialChart);

  const addNode = () => {
    const nodeId = `node${Object.keys(chart.nodes).length + 1}`;
    const newNode = {
      id: nodeId,
      type: "input-output",
      position: { x: 100, y: 100 },
      ports: {
        port1: { id: "port1", type: "input" },
        port2: { id: "port2", type: "output" },
      },
    };

    const updatedChart = {
      ...chart,
      nodes: { ...chart.nodes, [nodeId]: newNode },
    };
    setChart(updatedChart);
  };

  return (
    <div className="App">
      <button onClick={addNode}>Add Node</button>
      <FlowChartWithState initialValue={chart} />
    </div>
  );
}

export default DynamicFlowChart;
