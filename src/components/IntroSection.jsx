import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Sparkles, Feather } from 'lucide-react';

const IntroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center parchment-bg relative z-10 px-8 overflow-hidden">
      
      {/* 3D Generated Artifact: Golden Snitch */}
      <motion.img 
        src="/assets/snitch.png" 
        alt="Golden Snitch"
        className="absolute top-20 right-20 w-64 h-64 object-contain opacity-80 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Icons */}
      <motion.div 
        className="absolute bottom-32 left-32 text-magical-gold/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Wand2 size={48} />
      </motion.div>
      <motion.div 
        className="absolute top-40 left-1/4 text-magical-slytherin/40"
        animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-1/4 text-magical-gold/20"
        animate={{ y: [0, 20, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Feather size={40} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-20"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-magical-gold mb-8 leading-tight tracking-wide text-glow">
          The Boy Who Lived...<br/>
          <span className="text-4xl md:text-6xl text-gray-300">and Changed Cinema.</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-xl md:text-3xl font-sans text-gray-400 font-light"
        >
          A data-driven journey into the <span className="text-magical-gold hover:text-glow-hover transition-all cursor-default relative group">blueprint
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-magical-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </span> of the modern blockbuster.
        </motion.p>
      </motion.div>

      {/* Decorative magic dust */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-magical-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              boxShadow: '0 0 10px #d4af37'
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroSection;
