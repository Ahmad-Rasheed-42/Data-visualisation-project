import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  useNodesState,
  useEdgesState,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

// Hardcoded nodes for characters
const initialNodes = [
  { id: 'harry', position: { x: 400, y: 300 }, data: { label: 'Harry Potter' } },
  { id: 'voldemort', position: { x: 800, y: 300 }, data: { label: 'Lord Voldemort' } },
  { id: 'dumbledore', position: { x: 400, y: 100 }, data: { label: 'Albus Dumbledore' } },
  { id: 'snape', position: { x: 600, y: 200 }, data: { label: 'Severus Snape' } },
  { id: 'ron', position: { x: 250, y: 400 }, data: { label: 'Ron Weasley' } },
  { id: 'hermione', position: { x: 550, y: 400 }, data: { label: 'Hermione Granger' } },
  { id: 'draco', position: { x: 800, y: 150 }, data: { label: 'Draco Malfoy' } },
  { id: 'bellatrix', position: { x: 950, y: 400 }, data: { label: 'Bellatrix Lestrange' } },
  { id: 'sirius', position: { x: 250, y: 150 }, data: { label: 'Sirius Black' } },
  { id: 'mcgonagall', position: { x: 200, y: 250 }, data: { label: 'Minerva McGonagall' } },
];

// Edges with different types for relationships
// Animated edges for emphasis
const initialEdges = [
  { id: 'e-h-r', source: 'harry', target: 'ron', className: 'friend', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' } },
  { id: 'e-h-he', source: 'harry', target: 'hermione', className: 'friend', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' } },
  { id: 'e-r-he', source: 'ron', target: 'hermione', className: 'friend', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' } },
  { id: 'e-h-d', source: 'harry', target: 'dumbledore', className: 'friend', markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' } },
  { id: 'e-h-s', source: 'harry', target: 'sirius', className: 'friend', markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' } },
  
  { id: 'e-h-v', source: 'harry', target: 'voldemort', className: 'enemy', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
  { id: 'e-d-v', source: 'dumbledore', target: 'voldemort', className: 'enemy', markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
  { id: 'e-h-dr', source: 'harry', target: 'draco', className: 'enemy', markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
  { id: 'e-v-b', source: 'voldemort', target: 'bellatrix', className: 'friend', markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' } },
  
  // Snape's complex relationships
  { id: 'e-s-v', source: 'snape', target: 'voldemort', className: 'spy', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' } },
  { id: 'e-s-d', source: 'snape', target: 'dumbledore', className: 'spy', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' } },
  { id: 'e-s-h', source: 'snape', target: 'harry', className: 'enemy', markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
];

const GraphSection = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-full flex flex-col pt-12 relative">
      <div className="text-center z-10 pointer-events-none absolute top-12 left-0 right-0">
        <h2 className="text-4xl font-serif text-magical-gold text-glow mb-2">Wizarding Alliances</h2>
        <p className="text-gray-300 font-sans italic">Friends, Foes, and Spies</p>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-green-400"></span>
            <span className="text-xs text-green-400 font-sans uppercase tracking-wider">Alliance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-red-500"></span>
            <span className="text-xs text-red-500 font-sans uppercase tracking-wider">Enmity</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-purple-500"></span>
            <span className="text-xs text-purple-500 font-sans uppercase tracking-wider">Spy/Complex</span>
          </div>
        </div>
      </div>

      <div className="flex-grow w-full h-full mt-16">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-right"
          className="bg-transparent"
        >
          <Background color="#1b4332" gap={30} size={1.5} opacity={0.2} />
          <Controls className="fill-magical-gold border-magical-gold bg-magical-midnight" />
        </ReactFlow>
      </div>
    </div>
  );
};

export default GraphSection;
