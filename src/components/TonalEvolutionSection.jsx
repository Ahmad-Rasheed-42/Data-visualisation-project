import React from 'react';
import { motion } from 'framer-motion';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const data = [
  { title: "Sorcerer's Stone", darkness: 3.2, rating: 7.6 },
  { title: "Chamber of Secrets", darkness: 4.5, rating: 7.4 },
  { title: "Prisoner of Azkaban", darkness: 6.8, rating: 7.9 },
  { title: "Goblet of Fire", darkness: 7.5, rating: 7.7 },
  { title: "Order of the Phoenix", darkness: 8.2, rating: 7.5 },
  { title: "Half-Blood Prince", darkness: 8.9, rating: 7.6 },
  { title: "Deathly Hallows: Part 1", darkness: 9.3, rating: 7.7 },
  { title: "Deathly Hallows: Part 2", darkness: 9.5, rating: 8.1 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="font-serif text-lg text-magical-gold mb-1">{data.title}</p>
        <p className="text-sm text-gray-300">Darkness Score: <span className="text-white">{data.darkness}</span></p>
        <p className="text-sm text-gray-300">IMDb Rating: <span className="text-white">{data.rating}</span></p>
      </div>
    );
  }
  return null;
};

const TonalEvolutionSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">The Tonal Evolution</h2>
        <p className="text-2xl font-sans text-gray-400">
          Did a darker <span className="text-white hover:text-glow-hover cursor-default transition-all">tone</span> equal better ratings?
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-5xl h-[60vh] bg-magical-midnight/60 rounded-xl p-6 border border-magical-slytherin/50 backdrop-blur-sm"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a472a" opacity={0.5} />
            <XAxis 
              type="number" 
              dataKey="darkness" 
              name="Visual Darkness" 
              domain={[2, 10]} 
              stroke="#d4af37" 
              tick={{fill: '#f0e6d2', fontFamily: 'Inter'}}
              label={{ value: 'Visual Darkness Score', position: 'insideBottom', offset: -10, fill: '#d4af37', fontFamily: 'Playfair Display' }}
            />
            <YAxis 
              type="number" 
              dataKey="rating" 
              name="IMDb Rating" 
              domain={[7, 8.5]} 
              stroke="#d4af37"
              tick={{fill: '#f0e6d2', fontFamily: 'Inter'}}
              label={{ value: 'IMDb Rating', angle: -90, position: 'insideLeft', fill: '#d4af37', fontFamily: 'Playfair Display' }}
            />
            <ZAxis type="number" range={[100, 400]} />
            <Tooltip content={<CustomTooltip />} cursor={{strokeDasharray: '3 3', stroke: '#1a472a'}} />
            <Scatter 
              name="Movies" 
              data={data} 
              fill="#1a472a" 
              stroke="#d4af37"
              strokeWidth={2}
              shape="circle" 
              className="hover:filter hover:brightness-150 transition-all duration-300"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default TonalEvolutionSection;
