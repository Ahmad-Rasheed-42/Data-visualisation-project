import React from 'react';
import { motion } from 'framer-motion';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { title: "Sorcerer's Stone", pages: 309, rating: 7.6 },
  { title: "Chamber of Secrets", pages: 341, rating: 7.4 },
  { title: "Prisoner of Azkaban", pages: 435, rating: 7.9 },
  { title: "Goblet of Fire", pages: 734, rating: 7.7 },
  { title: "Order of the Phoenix", pages: 870, rating: 7.5 },
  { title: "Half-Blood Prince", pages: 652, rating: 7.6 },
  { title: "Deathly Hallows", pages: 759, rating: 8.1 }, // Aggregated for simplicity
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="font-serif text-lg text-magical-gold mb-2">{label}</p>
        <p className="text-sm text-[#1a472a] font-bold">Book Pages: <span className="text-gray-300 font-normal">{payload[0].value}</span></p>
        <p className="text-sm text-[#d4af37] font-bold">IMDb Rating: <span className="text-gray-300 font-normal">{payload[1].value}</span></p>
      </div>
    );
  }
  return null;
};

const ComplexityGapSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">The Complexity Gap</h2>
        <p className="text-2xl font-sans text-gray-400">
          Is there <span className="text-white hover:text-glow-hover cursor-default transition-all">book-to-screen</span> fatigue as the stories grew?
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-5xl h-[60vh] bg-magical-midnight/60 rounded-xl p-6 border border-magical-gold/30 backdrop-blur-sm"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.1} />
            <XAxis 
              dataKey="title" 
              stroke="#d4af37" 
              tick={{fill: '#f0e6d2', fontFamily: 'Inter', fontSize: 12}}
              interval={0}
              angle={-25}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              yAxisId="left" 
              stroke="#1a472a" 
              tick={{fill: '#1a472a', fontFamily: 'Inter'}}
              label={{ value: 'Book Page Count', angle: -90, position: 'insideLeft', fill: '#1a472a', fontFamily: 'Playfair Display' }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              domain={[7, 8.5]} 
              stroke="#d4af37" 
              tick={{fill: '#d4af37', fontFamily: 'Inter'}}
              label={{ value: 'IMDb Rating', angle: 90, position: 'insideRight', fill: '#d4af37', fontFamily: 'Playfair Display' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(212, 175, 55, 0.05)'}} />
            <Legend wrapperStyle={{ paddingTop: '20px', fontFamily: 'Inter', color: '#f0e6d2' }} />
            
            <Bar yAxisId="left" dataKey="pages" name="Page Count" fill="#1a472a" radius={[4, 4, 0, 0]} />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="rating" 
              name="Movie Rating" 
              stroke="#d4af37" 
              strokeWidth={3}
              dot={{r: 6, fill: '#0b132b', stroke: '#d4af37', strokeWidth: 2}}
              activeDot={{r: 8, fill: '#d4af37', shadow: '0 0 10px #d4af37'}}
              animationDuration={2000} // Draws itself slowly
            />
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default ComplexityGapSection;
