import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps, NodeResizer } from 'reactflow';



const CustomNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      {/* <NodeResizer /> */}
      <Handle type="target" position={Position.Top} />
      <div>
        <div>
        Approver
        </div>
        <div>
          Please choose approver
        </div>
      </div>
      <Handle type="target" position={Position.Bottom} />

    </>
  );
};

export default memo(CustomNode);
