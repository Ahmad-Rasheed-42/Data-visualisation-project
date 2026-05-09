import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IntroSection from './components/IntroSection';
import TonalEvolutionSection from './components/TonalEvolutionSection';
import ComplexityGapSection from './components/ComplexityGapSection';
import GlobalPhenomenonSection from './components/GlobalPhenomenonSection';

function App() {
  const targetRef = useRef(null);
  
  // Track vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll (0 to 1) to horizontal translation (0% to -75%)
  // Since we have 4 sections, we want to slide exactly 3 sections over (75% of the total width)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // The tall container that enables vertical scrolling
    // Height is 400vh (4 sections)
    <div ref={targetRef} className="h-[400vh] bg-magical-dark starry-bg w-full">
      
      {/* Sticky container that stays in the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* Magical Progress Bar (Wand Spell) */}
        <div className="fixed top-0 left-0 w-full h-2 z-50 bg-magical-midnight/50">
          <motion.div 
            className="h-full bg-magical-gold shadow-glow relative"
            style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
          >
            {/* The tip of the spell (glowing orb) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#d4af37,0_0_40px_#fff]"></div>
          </motion.div>
        </div>

        {/* The horizontal track holding the 4 sections */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          
          <section className="h-full w-[100vw] flex-shrink-0 relative overflow-hidden">
            <IntroSection />
          </section>

          <section className="h-full w-[100vw] flex-shrink-0 relative overflow-hidden">
            <TonalEvolutionSection />
          </section>

          <section className="h-full w-[100vw] flex-shrink-0 relative overflow-hidden">
            <ComplexityGapSection />
          </section>

          <section className="h-full w-[100vw] flex-shrink-0 relative overflow-hidden">
            <GlobalPhenomenonSection />
          </section>

        </motion.div>
      </div>
    </div>
  );
}

export default App;
