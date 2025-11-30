import React from 'react';
import { motion } from 'framer-motion';
import { TechCategory } from '../types';

const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    name: 'FRONTEND_CORE',
    skills: ["React 19", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Zustand", "Redux Toolkit"]
  },
  {
    id: 'backend',
    name: 'BACKEND_INFRA',
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "Socket.io", "Python", "Go (Basic)", "Serverless"]
  },
  {
    id: 'database',
    name: 'DATA_LAYER',
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma ORM", "Mongoose", "Firebase"]
  },
  {
    id: 'devops',
    name: 'DEVOPS_&_TOOLS',
    skills: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "CI/CD (GitHub Actions)", "Git", "Figma", "Linux"]
  }
];

const TechArsenal: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#111] relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
         <div className="mb-16 flex items-end gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">TECH_ARSENAL</h2>
              <div className="h-1.5 w-24 bg-neon shadow-[0_0_15px_#c2f970]"></div>
            </div>
            <span className="font-mono text-gray-500 mb-2 hidden md:block text-sm">// UPGRADING SKILLS...</span>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#1a1a1a] border border-white/10 p-6 hover:border-neon transition-colors duration-300 group flex flex-col h-full rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <h3 className="font-mono text-neon font-bold tracking-widest text-sm uppercase">{category.name}</h3>
                <span className="text-xs text-gray-500 font-mono">0{index + 1}</span>
              </div>
              
              <div className="flex flex-wrap gap-3 content-start flex-grow">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="relative px-3 py-2 bg-white/5 border border-white/10 rounded text-sm font-medium text-white transition-all duration-200 
                               hover:bg-neon hover:text-black hover:border-neon hover:shadow-[0_0_10px_rgba(194,249,112,0.4)] cursor-default select-none"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative System Status */}
        <div className="mt-16 flex items-center justify-between font-mono text-xs text-gray-500 border-t border-gray-800 pt-6">
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span>SYSTEM_STATUS: ONLINE</span>
             </div>
             <span>ALL MODULES LOADED</span>
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;