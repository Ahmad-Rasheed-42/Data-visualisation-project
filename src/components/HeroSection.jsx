import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2568&auto=format&fit=crop')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-magical-dark/80 backdrop-blur-sm z-0"></div>
      
      <div className="z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-magical-emerald text-xl md:text-2xl mb-4 font-serif tracking-widest uppercase">
            A Journey Through Data
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-magical-gold text-glow mb-8 leading-tight">
            Visualizing the <br/> Wizarding World
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-16 leading-relaxed">
            Delve into the complex tapestries of ancestry, alliances, and magical lore. 
            Uncover the hidden patterns that bind the witches, wizards, and magical creatures of our age.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center group cursor-pointer"
        >
          <span className="text-magical-gold font-serif text-lg tracking-widest uppercase mb-4 text-glow-hover transition-all duration-300">
            Scroll Right to Reveal the Magic
          </span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="text-magical-gold w-8 h-8 group-hover:scale-110 transition-transform" />
          </motion.div>
        </motion.div>
      </div>

      {/* Magical floating dust particles */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-magical-gold w-1 h-1"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
