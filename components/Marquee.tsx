import React from 'react';

const TECH_STACK = [
  "HTML5", "CSS3","JAVASCRIPT", "REACT", "TYPESCRIPT", "NODE.JS", "EXPRESS", "MONGODB", "NEXT.JS", "TAILWIND", "FRAMER MOTION", "THREE.JS", "GRAPHQL", "DOCKER", "AWS"
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-20 border-y border-gray-800 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div key={index} className="mx-8 md:mx-12 flex items-center gap-4 group-hover:pause">
               <span className="w-2 h-2 bg-neon rounded-full shadow-[0_0_10px_#c2f970]" />
               <span 
                className="text-4xl md:text-6xl font-bold font-mono tracking-tighter transition-all duration-300 cursor-default"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)', // Increased visibility
                }}
               >
                 <span className="hover:text-neon hover:drop-shadow-[0_0_5px_rgba(194,249,112,0.5)] transition-colors duration-300">
                    {tech}
                 </span>
               </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;