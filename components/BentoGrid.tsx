import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "NEO-COMMERCE",
    category: "Full Stack",
    description: "Headless Shopify alternative built with Next.js 14 and Stripe.",
    tags: ["Next.js", "Stripe", "Zustand"],
    link: "#",
    image: "https://picsum.photos/800/600?grayscale",
    featured: true
  },
  {
    id: 2,
    title: "TASK_OS",
    category: "Productivity",
    description: "Real-time collaboration tool using Socket.io and CRDTs.",
    tags: ["React", "Socket.io", "Redis"],
    link: "#",
    image: "https://picsum.photos/600/800?blur=2"
  },
  {
    id: 3,
    title: "SYNTH_AI",
    category: "AI Wrapper",
    description: "Generative art platform integrating Stable Diffusion.",
    tags: ["Python", "FastAPI", "React"],
    link: "#",
    image: "https://picsum.photos/600/600?grayscale"
  },
  {
    id: 4,
    title: "CRYPTO_DASH",
    category: "Web3",
    description: "DeFi dashboard with real-time on-chain analytics.",
    tags: ["Web3.js", "D3.js", "Tailwind"],
    link: "#",
    image: "https://picsum.photos/800/400?grayscale"
  }
];

const BentoCard: React.FC<{ project: Project; className?: string }> = ({ project, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden bg-[#222] border border-white/5 rounded-3xl p-6 flex flex-col justify-between ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
      />
      
      <div className="relative z-20 flex justify-between items-start">
        <span className="px-3 py-1 text-xs font-mono border border-neon/30 text-neon rounded-full bg-neon/5 backdrop-blur-md">
          {project.category}
        </span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-neon group-hover:text-charcoal transition-colors duration-300">
          ↗
        </div>
      </div>

      <div className="relative z-20 mt-20">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs text-gray-500 font-mono">#{tag}</span>
          ))}
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon/0 via-neon/20 to-neon/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0" />
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="work" className="px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">SELECTED<br/><span className="text-gray-700">WORKS_23-24</span></h2>
          </div>
          <div className="hidden md:block text-right font-mono text-xs text-neon">
            SCROLL TO EXPLORE <br/> [ 04 PROJECTS ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Main Feature - Large Square */}
          <BentoCard 
            project={projects[0]} 
            className="md:col-span-2 md:row-span-2" 
          />
          
          {/* Tall Vertical */}
          <BentoCard 
            project={projects[1]} 
            className="md:col-span-1 md:row-span-1" 
          />
          
          {/* Two Smaller Cards */}
          <BentoCard 
            project={projects[2]} 
            className="md:col-span-1 md:row-span-1" 
          />
           {/* If we had more projects, we could slot them here, or adjust the grid */}
        </div>
        
        {/* Extra row for the 4th project to balance layout if needed, or make the grid more complex */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <BentoCard project={projects[3]} className="h-[300px]" />
            <div className="h-[300px] bg-[#1a1a1a] border border-white/5 rounded-3xl flex items-center justify-center group cursor-pointer hover:border-neon/50 transition-colors">
               <div className="text-center">
                  <span className="block text-4xl mb-2 group-hover:text-neon transition-colors">+</span>
                  <span className="font-mono text-sm text-gray-500">VIEW ARCHIVE</span>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default BentoGrid;