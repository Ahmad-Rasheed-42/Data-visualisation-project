import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const initialNodes = [
  { id: '1', position: { x: 400, y: 50 }, data: { label: 'Phineas Nigellus Black', details: 'Headmaster of Hogwarts. A pure-blood wizard and the patriarch of the Black family.' } },
  { id: '2', position: { x: 250, y: 150 }, data: { label: 'Sirius Black II', details: 'Eldest son of Phineas Nigellus Black.' } },
  { id: '3', position: { x: 550, y: 150 }, data: { label: 'Cygnus Black II', details: 'Second son of Phineas Nigellus Black.' } },
  { id: '4', position: { x: 150, y: 250 }, data: { label: 'Arcturus Black III', details: 'Son of Sirius Black II.' } },
  { id: '5', position: { x: 550, y: 250 }, data: { label: 'Pollux Black', details: 'Son of Cygnus Black II.' } },
  { id: '6', position: { x: 150, y: 350 }, data: { label: 'Orion Black', details: 'Son of Arcturus Black III. Father of Sirius and Regulus.' } },
  { id: '7', position: { x: 400, y: 350 }, data: { label: 'Walburga Black', details: 'Daughter of Pollux Black. Married her second cousin Orion.' } },
  { id: '8', position: { x: 700, y: 350 }, data: { label: 'Cygnus Black III', details: 'Son of Pollux Black. Father of Bellatrix, Andromeda, and Narcissa.' } },
  { id: '9', position: { x: 100, y: 450 }, data: { label: 'Sirius Black III', details: 'The rebellious heir. Best friend of James Potter. Disowned by his family.' } },
  { id: '10', position: { x: 300, y: 450 }, data: { label: 'Regulus Arcturus Black', details: 'The younger brother. A Death Eater who turned against Voldemort.' } },
  { id: '11', position: { x: 550, y: 450 }, data: { label: 'Bellatrix Lestrange', details: 'Eldest daughter of Cygnus III. A fanatically loyal Death Eater.' } },
  { id: '12', position: { x: 700, y: 450 }, data: { label: 'Andromeda Tonks', details: 'Middle daughter of Cygnus III. Disowned for marrying a Muggle-born.' } },
  { id: '13', position: { x: 850, y: 450 }, data: { label: 'Narcissa Malfoy', details: 'Youngest daughter of Cygnus III. Mother of Draco Malfoy.' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
  { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
  { id: 'e4-6', source: '4', target: '6', type: 'smoothstep' },
  { id: 'e5-7', source: '5', target: '7', type: 'smoothstep' },
  { id: 'e5-8', source: '5', target: '8', type: 'smoothstep' },
  // Orion and Walburga are parents to Sirius and Regulus
  { id: 'e6-9', source: '6', target: '9', type: 'smoothstep' },
  { id: 'e6-10', source: '6', target: '10', type: 'smoothstep' },
  { id: 'e7-9', source: '7', target: '9', type: 'smoothstep' },
  { id: 'e7-10', source: '7', target: '10', type: 'smoothstep' },
  // Cygnus III's daughters
  { id: 'e8-11', source: '8', target: '11', type: 'smoothstep' },
  { id: 'e8-12', source: '8', target: '12', type: 'smoothstep' },
  { id: 'e8-13', source: '8', target: '13', type: 'smoothstep' },
];

const TreeSection = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-12 relative">
      <div className="text-center z-10 pointer-events-none absolute top-12 left-0 right-0">
        <h2 className="text-4xl font-serif text-magical-gold text-glow mb-2">The Noble and Most Ancient House of Black</h2>
        <p className="text-gray-300 font-sans italic">Toujours Pur (Always Pure)</p>
        <p className="text-sm text-magical-emerald mt-2">Click on a portrait to reveal their history.</p>
      </div>

      <div className="flex-grow w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          attributionPosition="bottom-left"
          className="bg-transparent"
        >
          <Background color="#D4AF37" gap={50} opacity={0.1} />
          <Controls className="fill-magical-gold border-magical-gold bg-magical-midnight" />
        </ReactFlow>
      </div>

      {/* Details Panel Overlay */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute top-32 right-12 w-80 bg-magical-midnight/90 border-2 border-magical-gold rounded-xl p-6 shadow-[0_0_30px_rgba(212,175,55,0.3)] backdrop-blur-md z-50"
          >
            <button 
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-magical-gold transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-serif text-magical-gold mb-4 border-b border-magical-gold/30 pb-2">
              {selectedNode.data.label}
            </h3>
            <p className="text-gray-200 font-sans leading-relaxed">
              {selectedNode.data.details}
            </p>
            <div className="mt-6 pt-4 border-t border-magical-gold/30 flex justify-center">
              <span className="text-xs tracking-widest text-magical-emerald uppercase font-serif">
                House of Black
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TreeSection;
