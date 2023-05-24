import { useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
  MarkerType,
  Background,
  MiniMap,
  Controls,
} from 'reactflow';
import ApproverNode from './ApproverNode';
import TextUpdaterNode from './TextUpdaterNode';
import styles from './Flow.module.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Applicant Submit' },
    position: { x: 250, y: 0 },
    className: styles.startNode
  },
  {
    id: '2',
    data: { label: '+' },
    position: { x: 305.5, y: 80 },
    className: styles.addNode
  },
  {
    id: '3',
    data: { label: 'Complete' },
    type: 'output',
    position: { x: 273, y: 160 },
    className: styles.endNode
  },
  {
    id: '4',
    data: { label: 'Node 4' },
    position: { x: 400, y: 200 },
    type: 'custom',
    className: styles.ApproverNode,
  },
];
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3',markerEnd: {
    type: MarkerType.ArrowClosed,
  }, }
];

const minimapStyle = {
  height: 120,
};

const nodeTypes = {
  custom: ApproverNode,
  textUpdater: TextUpdaterNode,
};

const defaultEdgeOptions = {
  animated: false,
  type: 'smoothstep',
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={styles.flow}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
       </ReactFlow>
    </div>
  );
}

export default Flow;
