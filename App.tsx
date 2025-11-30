import React, { Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import TechArsenal from './components/TechArsenal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-charcoal text-white selection:bg-neon selection:text-charcoal">
      <CustomCursor />
      <NoiseOverlay />
      <NavBar />
      
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center font-mono text-neon">LOADING...</div>}>
        <Hero />
        <Marquee />
        <BentoGrid />
        <TechArsenal />
        <Experience />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;