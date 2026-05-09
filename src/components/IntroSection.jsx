import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center parchment-bg relative z-10 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center max-w-4xl"
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
          A data-driven journey into the <span className="text-magical-gold hover:text-glow-hover transition-all cursor-default">blueprint</span> of the modern blockbuster.
        </motion.p>
      </motion.div>

      {/* Decorative magic dust */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-magical-gold w-1 h-1"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
