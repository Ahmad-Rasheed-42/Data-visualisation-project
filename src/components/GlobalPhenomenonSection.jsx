import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Moon, Stars, Compass, Globe } from 'lucide-react';

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
      <div className="custom-tooltip z-50 relative">
        <p className="font-serif text-xl text-magical-gold mb-1">{data.country}</p>
        <p className="text-sm text-gray-300">Revenue: <span className="text-white font-bold drop-shadow-[0_0_5px_#fff]">${data.revenue} Million</span></p>
      </div>
    );
  }
  return null;
};

const GlobalPhenomenonSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-10 overflow-hidden">
      
      {/* 3D Generated Artifact: Astrolabe / Crystal Ball */}
      <motion.img 
        src="/assets/astrolabe.png" 
        alt="Magical Astrolabe"
        className="absolute bottom-20 right-20 w-80 h-80 object-contain opacity-70 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Icons */}
      <motion.div 
        className="absolute top-20 left-20 text-magical-gold/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Compass size={80} strokeWidth={1} />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-1/3 text-gray-300/30"
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Moon size={40} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-1/3 text-magical-gold/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stars size={32} />
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
        
        {/* Text Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">The Global Phenomenon</h2>
          <p className="text-xl font-sans text-gray-400 mb-6">
            Where is the <span className="text-magical-gold hover:text-glow-hover cursor-default transition-all drop-shadow-[0_0_10px_#d4af37]">magic</span> most potent?
          </p>
          
          <div className="bg-magical-midnight/80 border border-magical-gold/20 rounded-xl p-5 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
            <h3 className="text-magical-gold font-serif text-xl mb-2 flex items-center gap-2">
              <Globe size={18} /> The Analysis
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
              This abstract map plots the international box office revenue distribution across key worldwide territories, sizing the markers by total earnings.
            </p>
            <h3 className="text-magical-gold font-serif text-xl mb-2 flex items-center gap-2">
              <Stars size={18} /> The Conclusion
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              The magic was truly universal. While the US and UK served as the primary strongholds, the staggering revenue from Japan, Germany, and France demonstrates how a distinctly British story became a global cinematic empire, setting the absolute gold standard for worldwide franchise syndication and cultural saturation.
            </p>
          </div>
        </motion.div>

        {/* Chart Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="col-span-2 w-full h-[65vh] bg-magical-midnight/70 rounded-xl p-6 relative overflow-hidden border border-magical-gold/20 backdrop-blur-md z-20 shadow-[0_0_50px_rgba(11,19,43,0.8)]"
        >
          {/* Abstract World Map Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'><path d=\'M200,100 Q250,50 300,100 T400,150 T500,100 T600,200 T800,100 T900,150 M100,300 Q150,250 200,350 T300,400 T400,300 T600,400 T800,300\' fill=\'none\' stroke=\'%23d4af37\' stroke-width=\'2\' stroke-dasharray=\'5,5\'/></svg>")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>

          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis type="number" dataKey="x" hide domain={[0, 100]} />
              <YAxis type="number" dataKey="y" hide domain={[0, 100]} />
              <ZAxis type="number" dataKey="revenue" range={[600, 15000]} />
              
              <Tooltip content={<CustomTooltip />} cursor={{strokeDasharray: '3 3', stroke: 'rgba(212,175,55,0.2)'}} />
              
              <Scatter 
                name="Countries" 
                data={data} 
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                animationDuration={2000}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={activeIndex === index ? '#d4af37' : 'rgba(26,71,42,0.8)'} 
                    stroke={activeIndex === index ? '#ffffff' : '#d4af37'}
                    strokeWidth={activeIndex === index ? 3 : 2}
                    className="transition-all duration-300 cursor-pointer"
                    style={{ 
                      filter: activeIndex === index ? 'drop-shadow(0 0 25px rgba(212, 175, 55, 1))' : 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.4))' 
                    }}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalPhenomenonSection;
