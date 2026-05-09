import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { Shield, Sparkles, Trophy, Award } from 'lucide-react';

const houseData = [
  { name: 'Gryffindor', value: 5369, color: '#7F0909' },
  { name: 'Slytherin', value: 860, color: '#1A472A' },
  { name: 'Ravenclaw', value: 222, color: '#0E1A40' },
  { name: 'Hufflepuff', value: 56, color: '#EEE117' },
];

const spellData = [
  { name: 'Lumos', count: 16 },
  { name: 'Expecto Patronum', count: 13 },
  { name: 'Expelliarmus', count: 12 },
  { name: 'Riddikulus', count: 8 },
  { name: 'Accio', count: 7 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip z-50 relative">
        <p className="font-serif text-xl text-magical-gold mb-1">{data.name}</p>
        <p className="text-sm text-gray-300">
          {data.value ? `Dialogue Lines: ${data.value}` : `Times Spoken: ${data.count}`}
        </p>
      </div>
    );
  }
  return null;
};

const HogwartsAnalyticsSection = () => {
  const [isLumosActive, setIsLumosActive] = useState(false);

  const handleBarClick = (data) => {
    // Check if clicked bar or text is "Lumos" (accounting for lowercases just in case)
    if (data && data.name && data.name.toLowerCase() === 'lumos') {
      setIsLumosActive(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-10 overflow-hidden">
      
      {/* Lumos Easter Egg Overlay */}
      <AnimatePresence>
        {isLumosActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={() => setIsLumosActive(false)}
          >
            <motion.div
              initial={{ scale: 0.8, textShadow: '0 0 0px #fff' }}
              animate={{ 
                scale: 1, 
                textShadow: ['0 0 20px #fff, 0 0 40px #fff', '0 0 50px #fff, 0 0 100px #fff', '0 0 20px #fff, 0 0 40px #fff'],
                filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1 className="text-white text-7xl md:text-9xl font-serif tracking-widest pointer-events-none">
                LUMOS
              </h1>
            </motion.div>
            
            {/* Blinding Light effect in background */}
            <motion.div 
              className="absolute inset-0 bg-white pointer-events-none mix-blend-overlay"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Generated Artifact: Floating Wand */}
      <motion.img 
        src={`${import.meta.env.BASE_URL}assets/wand.png`}
        alt="Glowing Magic Wand"
        className="absolute top-10 right-20 w-80 h-80 object-contain opacity-80 pointer-events-none"
        style={{ mixBlendMode: 'screen', maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
        animate={{
          y: [0, 20, 0],
          rotate: [45, 50, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Icons */}
      <motion.div 
        className="absolute bottom-20 left-20 text-magical-gold/30"
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Trophy size={64} />
      </motion.div>
      <motion.div 
        className="absolute top-32 left-32 text-[#1A472A]/40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield size={48} />
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col items-center mb-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">Hogwarts Analytics</h2>
          <p className="text-xl font-sans text-gray-400">
            A deeper dive into the <span className="text-magical-gold hover:text-glow-hover cursor-default transition-all drop-shadow-[0_0_10px_#d4af37]">script data</span> & lore.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
        
        {/* House Dominance (Pie Chart) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="col-span-1 bg-magical-midnight/70 rounded-xl p-6 border border-magical-gold/20 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col"
        >
          <h3 className="text-magical-gold font-serif text-2xl mb-2 flex items-center gap-2">
            <Shield size={24} /> House Dialogue
          </h3>
          <p className="text-sm text-gray-400 mb-4">Total lines of dialogue spoken by members of each house.</p>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={houseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  className="cursor-pointer hover:filter hover:brightness-125 transition-all"
                >
                  {houseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(212,175,55,0.3)" strokeWidth={2} />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Most Used Spells (Bar Chart) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="col-span-1 bg-magical-midnight/70 rounded-xl p-6 border border-magical-gold/20 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col"
        >
          <h3 className="text-magical-gold font-serif text-2xl mb-2 flex items-center gap-2">
            <Sparkles size={24} /> Top Spells
          </h3>
          <p className="text-sm text-gray-400 mb-4">Click the <strong className="text-white cursor-pointer hover:text-magical-gold transition-colors" onClick={() => setIsLumosActive(true)}>Lumos</strong> bar to cast a spell!</p>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spellData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.1} horizontal={false} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#f0e6d2', fontFamily: 'Inter', fontSize: 12, cursor: 'pointer'}} 
                  onClick={handleBarClick}
                />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: 'rgba(212, 175, 55, 0.1)'}} />
                <Bar 
                  dataKey="count" 
                  fill="#d4af37" 
                  radius={[0, 4, 4, 0]} 
                  barSize={20} 
                  className="hover:filter hover:brightness-150 hover:drop-shadow-[0_0_10px_#d4af37] transition-all cursor-pointer" 
                  onClick={handleBarClick}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Lore: Points & Quidditch (Info Cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="col-span-1 flex flex-col gap-6"
        >
          {/* Quidditch Lore */}
          <div className="flex-1 bg-gradient-to-br from-[#7F0909]/20 to-magical-midnight border border-[#7F0909]/50 rounded-xl p-6 backdrop-blur-md shadow-[0_0_20px_rgba(127,9,9,0.2)]">
            <h3 className="text-[#d4af37] font-serif text-2xl mb-3 flex items-center gap-2 drop-shadow-[0_0_5px_#d4af37]">
              <Trophy size={24} /> Quidditch Cup
            </h3>
            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              While Slytherin held a dominant 7-year winning streak prior to Harry's arrival, <strong className="text-[#d4af37]">Gryffindor</strong> ultimately won the Quidditch Cup <strong className="text-white">3 times</strong> during Harry's tenure (1993, 1995, 1996), cementing their athletic superiority in the films.
            </p>
          </div>

          {/* House Points Lore */}
          <div className="flex-1 bg-gradient-to-br from-[#1A472A]/20 to-magical-midnight border border-[#1A472A]/50 rounded-xl p-6 backdrop-blur-md shadow-[0_0_20px_rgba(26,71,42,0.2)]">
            <h3 className="text-[#d4af37] font-serif text-2xl mb-3 flex items-center gap-2 drop-shadow-[0_0_5px_#d4af37]">
              <Award size={24} /> The House Cup
            </h3>
            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              Based on script dialogue, Gryffindor was verbally penalized points more often than rewarded! However, canonical lore confirms <strong className="text-[#d4af37]">Gryffindor</strong> won the House Cup <strong className="text-white">4 consecutive years</strong>, often due to massive last-minute point grants by Dumbledore for saving the school.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HogwartsAnalyticsSection;
