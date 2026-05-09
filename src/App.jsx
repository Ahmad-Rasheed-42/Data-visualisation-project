import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IntroSection from './components/IntroSection';
import TonalEvolutionSection from './components/TonalEvolutionSection';
import ComplexityGapSection from './components/ComplexityGapSection';
import GlobalPhenomenonSection from './components/GlobalPhenomenonSection';
import HogwartsAnalyticsSection from './components/HogwartsAnalyticsSection';
import TriwizardAcademicSection from './components/TriwizardAcademicSection';

function App() {
  const targetRef = useRef(null);
  
  // Track vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll (0 to 1) to horizontal translation
  // 6 sections total. We want to slide 5 sections over (5/6 of the width = 83.333%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.333%"]);

  return (
    // The tall container that enables vertical scrolling
    // Height is 600vh (6 sections)
    <div ref={targetRef} className="h-[600vh] bg-magical-dark starry-bg w-full relative">
      
      {/* Ambient background glow added for extra magical depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-magical-slytherin/10 via-magical-midnight/5 to-transparent pointer-events-none z-0"></div>

      {/* Sticky container that stays in the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col z-10">
        
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

        {/* The horizontal track holding the 6 sections */}
        <motion.div style={{ x }} className="flex h-full w-[600vw]">
          
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

          <section className="h-full w-[100vw] flex-shrink-0 relative overflow-hidden">
            <HogwartsAnalyticsSection />
          </section>

          <section className="h-full w-[100vw] flex-shrink-0 relative overflow-hidden">
            <TriwizardAcademicSection />
          </section>

        </motion.div>
      </div>
    </div>
  );
}

export default App;
