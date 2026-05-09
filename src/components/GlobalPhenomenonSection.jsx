import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Moon, Stars, Compass, Globe } from 'lucide-react';

const data = [
  { country: "United States", revenue: 2890, x: 22, y: 65 },
  { country: "United Kingdom", revenue: 1100, x: 47, y: 75 },
  { country: "Japan", revenue: 850, x: 86, y: 65 },
  { country: "Germany", revenue: 640, x: 50, y: 72 },
  { country: "France", revenue: 580, x: 48, y: 68 },
  { country: "Australia", revenue: 320, x: 85, y: 25 },
  { country: "Brazil", revenue: 210, x: 32, y: 35 },
  { country: "China", revenue: 350, x: 75, y: 60 },
  { country: "Italy", revenue: 270, x: 52, y: 65 },
  { country: "Spain", revenue: 230, x: 46, y: 65 },
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
        src={`${import.meta.env.BASE_URL}assets/astrolabe.png`}
        alt="Magical Astrolabe"
        className="absolute bottom-20 right-20 w-80 h-80 object-contain opacity-70 pointer-events-none"
        style={{ mixBlendMode: 'screen', maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
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
              This interactive world map highlights the international box office revenue distribution across key territories.
            </p>
            <h3 className="text-magical-gold font-serif text-xl mb-2 flex items-center gap-2">
              <Stars size={18} /> The Conclusion
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              The magic was truly universal. While the US and UK served as the primary strongholds, the staggering revenue from Japan, Germany, and France demonstrates how a distinctly British story became a global cinematic empire.
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
          {/* Actual World Map Background */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none" 
            style={{
              backgroundImage: `url("${import.meta.env.BASE_URL}assets/world.svg")`,
              backgroundSize: '90%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'sepia(1) hue-rotate(10deg) saturate(2) brightness(0.8)' // Themed color tweak
            }}
          ></div>

          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis type="number" dataKey="x" hide domain={[0, 100]} />
              <YAxis type="number" dataKey="y" hide domain={[0, 100]} />
              <ZAxis type="number" dataKey="revenue" range={[600, 15000]} />
              
              <Tooltip content={<CustomTooltip />} cursor={false} />
              
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
