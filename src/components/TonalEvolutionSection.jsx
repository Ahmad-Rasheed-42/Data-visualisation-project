import React from 'react';
import { motion } from 'framer-motion';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';
import { Skull, Ghost, Sparkles } from 'lucide-react';

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
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-10 overflow-hidden">
      
      {/* 3D Generated Artifact: Potion Bottle */}
      <motion.img 
        src="/assets/potion.png" 
        alt="Bubbling Potion"
        className="absolute bottom-10 left-10 w-72 h-72 object-contain opacity-70 pointer-events-none"
        style={{ mixBlendMode: 'screen', maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
          filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Giant Rotating Alchemy Circle Background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-magical-slytherin fill-none" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
          <polygon points="50,2 93,75 7,75" />
          <polygon points="50,98 7,25 93,25" />
          <circle cx="50" cy="50" r="20" />
        </svg>
      </motion.div>

      {/* Floating Icons */}
      <motion.div 
        className="absolute top-20 right-32 text-magical-slytherin/30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Skull size={56} />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-1/4 text-gray-500/20"
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Ghost size={40} />
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
        
        {/* Text Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">The Tonal Evolution</h2>
          <p className="text-xl font-sans text-gray-400 mb-6">
            Did a darker <span className="text-white hover:text-glow-hover cursor-default transition-all shadow-[0_0_15px_rgba(26,71,42,0.8)] rounded-md px-1 bg-magical-slytherin/20">tone</span> equal better ratings?
          </p>
          
          <div className="bg-magical-midnight/80 border border-magical-slytherin/30 rounded-xl p-5 shadow-[0_0_20px_rgba(26,71,42,0.15)] backdrop-blur-md">
            <h3 className="text-magical-slytherin font-serif text-xl mb-2 flex items-center gap-2">
              <Skull size={18} /> The Analysis
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed mb-4">
              This scatter plot maps the visual darkness (color grading and thematic tone) against the IMDb rating of each film.
            </p>
            <h3 className="text-magical-gold font-serif text-xl mb-2 flex items-center gap-2">
              <Sparkles size={18} /> The Conclusion
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              As the series progressed, the tone grew significantly darker, mirroring the maturity of the audience. The highest-rated films (like <span className="text-white italic">Deathly Hallows Part 2</span> and <span className="text-white italic">Prisoner of Azkaban</span>) correspond with steep tonal shifts, suggesting audiences deeply resonated with the darker, more mature narrative evolution.
            </p>
          </div>
        </motion.div>

        {/* Chart Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="col-span-2 w-full h-[65vh] bg-magical-midnight/70 rounded-xl p-6 border border-magical-slytherin/50 backdrop-blur-md shadow-[0_0_30px_rgba(26,71,42,0.2)]"
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
              <ZAxis type="number" range={[150, 500]} />
              <Tooltip content={<CustomTooltip />} cursor={{strokeDasharray: '3 3', stroke: '#1a472a'}} />
              <Scatter 
                name="Movies" 
                data={data} 
                fill="#1a472a" 
                stroke="#d4af37"
                strokeWidth={2}
                shape="circle" 
                className="hover:filter hover:brightness-150 hover:drop-shadow-[0_0_15px_#1a472a] transition-all duration-300 cursor-pointer"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default TonalEvolutionSection;
