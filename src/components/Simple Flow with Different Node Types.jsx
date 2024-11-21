import { FlowChartWithState } from "@mrblenny/react-flow-chart";

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      id: "node1",
      type: "input-only",
      position: {
        x: 150,
        y: 150
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        }
      }
    },
    node2: {
      id: "node2",
      type: "output-only",
      position: {
        x: 500,
        y: 150
      },
      ports: {
        port1: {
          id: "port1",
          type: "output"
        }
      }
    }
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port1"
      },
      to: {
        nodeId: "node2",
        portId: "port1"
      },
      properties: {
        label: "Data flow"
      }
    }
  },
  selected: {},
  hovered: {}
};

function SimpleFlowChart() {
  return (
    <div className="App">
      <FlowChartWithState initialValue={chartSimple} />
    </div>
  );
}

export default SimpleFlowChart;
