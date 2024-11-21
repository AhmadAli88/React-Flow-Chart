import { FlowChartWithState } from "@mrblenny/react-flow-chart";

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      id: "node1",
      type: "input-output",
      position: {
        x: 100,
        y: 100
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
    },
    node2: {
      id: "node2",
      type: "input-output",
      position: {
        x: 300,
        y: 100
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
    },
    node3: {
      id: "node3",
      type: "input-output",
      position: {
        x: 500,
        y: 100
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
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port2"
      },
      to: {
        nodeId: "node2",
        portId: "port1"
      },
      properties: {
        label: "Link 1"
      }
    },
    link2: {
      id: "link2",
      from: {
        nodeId: "node2",
        portId: "port2"
      },
      to: {
        nodeId: "node3",
        portId: "port1"
      },
      properties: {
        label: "Link 2"
      }
    }
  },
  selected: {},
  hovered: {}
};

function LinksFlowChart() {
  return (
    <div className="App">
      <FlowChartWithState initialValue={chartSimple} />
    </div>
  );
}

export default LinksFlowChart;
