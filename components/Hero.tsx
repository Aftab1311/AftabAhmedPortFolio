import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
import Aftabnew from '../components/assets/Aftabnew.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 md:pt-20 relative overflow-hidden">
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-neon opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-white opacity-[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-neon text-sm md:text-base mb-4 tracking-widest"
          >
            // FULL STACK MERN DEVELOPER
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                BUILDING
              </motion.div>
            </div>
            <div className="overflow-hidden flex flex-wrap items-center gap-2 md:gap-4">
               <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="italic font-serif font-light text-gray-400"
              >
                DIGITAL
              </motion.div>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-neon"
              >
                 <ScrambleText text="REALITIES" speed={70} />
              </motion.div>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed font-light mt-8 border-l border-neon/30 pl-6"
          >
            Crafting high-performance web applications with brutalist aesthetics and pixel-perfect interactions. 
            Specialized in React, Node, and WebGL.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-12 flex items-center gap-6"
          >
            <a 
              href="#work"
              className="group relative px-8 py-3 bg-transparent border border-gray-700 hover:border-neon rounded-full overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative font-mono text-sm z-10 group-hover:text-charcoal transition-colors duration-300">
                VIEW PROJECTS
              </span>
            </a>
            
            <div className="h-[1px] w-12 md:w-24 bg-gray-800" />
            
            <div className="flex gap-4 text-xs font-mono text-gray-500">
              <span>SCROLL</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Right Image Content - Orbital System */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative perspective-1000">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] flex items-center justify-center"
             >
                {/* Ray/Radar Effect */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(194,249,112,0.1)_360deg)] animate-[spin_4s_linear_infinite] rounded-full opacity-50 blur-2xl pointer-events-none" />
                
                {/* ---------------- OUTER ORBIT (Counter-Clockwise) ---------------- */}
                <div className="absolute inset-0 animate-[spin_30s_linear_infinite_reverse]">
                    {/* Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-[spin_30s_linear_infinite] bg-[#111] border border-gray-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-gray-400 shadow-lg whitespace-nowrap">TYPESCRIPT</div>
                    </div>
                    {/* Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="animate-[spin_30s_linear_infinite] bg-[#111] border border-gray-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-gray-400 shadow-lg whitespace-nowrap">DOCKER</div>
                    </div>
                    {/* Left */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-[spin_30s_linear_infinite] bg-[#111] border border-gray-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-gray-400 shadow-lg whitespace-nowrap">AWS</div>
                    </div>
                    {/* Right */}
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                        <div className="animate-[spin_30s_linear_infinite] bg-[#111] border border-gray-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-gray-400 shadow-lg whitespace-nowrap">MONGODB</div>
                    </div>
                </div>
                {/* Outer Ring Visual */}
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-800 pointer-events-none" />


                {/* ---------------- INNER ORBIT (Clockwise) ---------------- */}
                <div className="absolute inset-20 md:inset-24 animate-[spin_20s_linear_infinite]">
                     {/* Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-[spin_20s_linear_infinite_reverse] bg-charcoal border border-neon/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-neon shadow-[0_0_10px_rgba(194,249,112,0.2)] whitespace-nowrap">REACT</div>
                    </div>
                    {/* Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="animate-[spin_20s_linear_infinite_reverse] bg-charcoal border border-neon/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-neon shadow-[0_0_10px_rgba(194,249,112,0.2)] whitespace-nowrap">NODE.JS</div>
                    </div>
                    {/* Left */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-[spin_20s_linear_infinite_reverse] bg-charcoal border border-neon/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-white shadow-lg whitespace-nowrap">NEXT.JS</div>
                    </div>
                    {/* Right */}
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                         <div className="animate-[spin_20s_linear_infinite_reverse] bg-charcoal border border-neon/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-mono text-white shadow-lg whitespace-nowrap">TAILWIND</div>
                    </div>
                </div>
                {/* Inner Ring Visual */}
                <div className="absolute inset-20 md:inset-24 rounded-full border border-dashed border-neon/20 pointer-events-none" />

                {/* ---------------- CENTRAL IMAGE ---------------- */}
                <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-full border-2 border-neon overflow-hidden shadow-[0_0_40px_rgba(194,249,112,0.3)] group z-10 bg-charcoal">
                    {/* Overlay for tinting */}
                    <div className="absolute inset-0 bg-neon/10 mix-blend-overlay z-10 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                    
                    <img 
                        src={Aftabnew} 
                        alt="Developer Portrait" 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                </div>
                
             </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;