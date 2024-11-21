import { FlowChartWithState } from "@mrblenny/react-flow-chart";

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      id: "node1",
      type: "custom-node",
      position: {
        x: 200,
        y: 200
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output"
        }
      }
    }
  },
  links: {},
  selected: {},
  hovered: {}
};

function CustomFlowChart() {
  return (
    <div className="App">
      <FlowChartWithState initialValue={chartSimple} />
    </div>
  );
}

export default CustomFlowChart;
