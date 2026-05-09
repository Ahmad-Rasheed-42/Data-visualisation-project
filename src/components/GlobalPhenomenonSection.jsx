import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { country: "United States", revenue: 2890, x: 20, y: 50 },
  { country: "United Kingdom", revenue: 1100, x: 45, y: 70 },
  { country: "Japan", revenue: 850, x: 80, y: 60 },
  { country: "Germany", revenue: 640, x: 50, y: 65 },
  { country: "France", revenue: 580, x: 47, y: 55 },
  { country: "Australia", revenue: 320, x: 85, y: 20 },
  { country: "Brazil", revenue: 210, x: 30, y: 30 },
  { country: "China", revenue: 350, x: 75, y: 50 },
  { country: "Italy", revenue: 270, x: 53, y: 50 },
  { country: "Spain", revenue: 230, x: 45, y: 45 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="font-serif text-xl text-magical-gold mb-1">{data.country}</p>
        <p className="text-sm text-gray-300">Revenue: <span className="text-white font-bold">${data.revenue} Million</span></p>
      </div>
    );
  }
  return null;
};

const GlobalPhenomenonSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">The Global Phenomenon</h2>
        <p className="text-2xl font-sans text-gray-400">
          Where is the <span className="text-magical-gold hover:text-glow-hover cursor-default transition-all">magic</span> most potent?
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-5xl h-[60vh] bg-magical-midnight/40 rounded-xl p-6 relative overflow-hidden"
      >
        {/* Abstract World Map Background Suggestion */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'><path d=\'M200,100 Q250,50 300,100 T400,150 T500,100 T600,200 T800,100 T900,150 M100,300 Q150,250 200,350 T300,400 T400,300 T600,400 T800,300\' fill=\'none\' stroke=\'%23d4af37\' stroke-width=\'2\' stroke-dasharray=\'5,5\'/></svg>")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            {/* Invisible axes to create the abstract map plot */}
            <XAxis type="number" dataKey="x" hide domain={[0, 100]} />
            <YAxis type="number" dataKey="y" hide domain={[0, 100]} />
            <ZAxis type="number" dataKey="revenue" range={[400, 10000]} />
            
            <Tooltip content={<CustomTooltip />} cursor={{strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.1)'}} />
            
            <Scatter 
              name="Countries" 
              data={data} 
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={activeIndex === index ? '#d4af37' : '#1a472a'} 
                  stroke={activeIndex === index ? '#ffffff' : '#d4af37'}
                  strokeWidth={activeIndex === index ? 3 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  style={{ filter: activeIndex === index ? 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))' : 'none' }}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default GlobalPhenomenonSection;
