import { useState } from 'react';
import { FlowChart } from '@mrblenny/react-flow-chart';

const initialChart = {
  nodes: {
    a: {
      id: 'a',
      type: 'output',
      position: { x: 150, y: 150 },
      ports: {
        out: { id: 'out', properties: {} }
      },
      properties: {
        label: 'Start'
      }
    },
    b: {
      id: 'b',
      type: 'input',
      position: { x: 450, y: 150 },
      ports: {
        in: { id: 'in', properties: {} }
      },
      properties: {
        label: 'Process'
      }
    },
    c: {
      id: 'c',
      type: 'output',
      position: { x: 750, y: 150 },
      ports: {
        out: { id: 'out', properties: {} }
      },
      properties: {
        label: 'End'
      }
    }
  },
  links: {
    ab: {
      id: 'ab',
      source: { nodeId: 'a', portId: 'out' },
      target: { nodeId: 'b', portId: 'in' },
      properties: {
        label: 'Start to Process'
      }
    },
    bc: {
      id: 'bc',
      source: { nodeId: 'b', portId: 'out' },
      target: { nodeId: 'c', portId: 'in' },
      properties: {
        label: 'Process to End'
      }
    }
  },
  selected: {},
  hovered: {}
};

const Customize = () => {
  const [chart, setChart] = useState(initialChart);

  // Event handlers for managing node and link interactions
  const onChange = (newChart) => {
    setChart(newChart);  // Update chart state when changes occur
  };

  const onDragNode = (nodeId, x, y) => {
    // You can add logic here to handle node dragging
    console.log(`Node ${nodeId} is dragged to position (${x}, ${y})`);
  };

  const onSelectNode = (nodeId) => {
    // Handle node selection if needed
    console.log(`Node selected: ${nodeId}`);
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      {/* Pass the event handlers along with the chart state */}
      <FlowChart
        chart={chart}
        onChange={onChange}
        onDragNode={onDragNode}   
        onSelectNode={onSelectNode}  
      />
    </div>
  );
};

export default Customize;
