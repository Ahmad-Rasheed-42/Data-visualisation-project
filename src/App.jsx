import React from 'react';
import HeroSection from './components/HeroSection';
import TreeSection from './components/TreeSection';
import GraphSection from './components/GraphSection';

function App() {
  return (
    <div className="snap-container bg-magical-dark starry-bg text-gray-200">
      <section className="snap-section">
        <HeroSection />
      </section>
      <section className="snap-section">
        <TreeSection />
      </section>
      <section className="snap-section">
        <GraphSection />
      </section>
    </div>
  );
}

export default App;
