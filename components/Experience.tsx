import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "NEXUS_LABS",
    period: "2023 — PRESENT",
    description: [
      "Architected a microservices-based e-commerce platform handling 50k+ monthly active users.",
      "Led a team of 4 developers, implementing CI/CD pipelines reducing deployment time by 40%.",
      "Optimized React performance using virtualization and memoization, improving LCP by 1.2s."
    ],
    tech: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "AERO_DIGITAL",
    period: "2021 — 2023",
    description: [
      "Developed interactive 3D product configurators using Three.js and React Fiber.",
      "Collaborated with UI/UX designers to implement pixel-perfect, accessible interfaces.",
      "Migrated legacy jQuery codebase to Next.js, improving SEO and maintainability."
    ],
    tech: ["Next.js", "Three.js", "TypeScript", "Tailwind", "GSAP"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "FREELANCE / CONTRACT",
    period: "2020 — 2021",
    description: [
      "Built custom MERN stack applications for local businesses and startups.",
      "Implemented secure authentication flows using JWT and OAuth.",
      "Designed responsive landing pages with a focus on mobile-first methodology."
    ],
    tech: ["React", "Express", "MongoDB", "Firebase"]
  }
];

const Experience: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="experience" className="px-6 md:px-12 py-20 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-gray-800 pb-4 flex items-end justify-between">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            CAREER<span className="text-neon">_LOG</span>
          </h2>
          <span className="font-mono text-xs text-gray-500 hidden md:block">
            // HISTORY_V2.0
          </span>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative border-l border-gray-800 py-8 pl-8 md:pl-12 transition-colors duration-300 hover:border-neon"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[-5px] top-10 w-2.5 h-2.5 rounded-full transition-colors duration-300 ${hoveredId === exp.id ? 'bg-neon shadow-[0_0_10px_#c2f970]' : 'bg-gray-800'}`} />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Period - Left Column on Desktop */}
                <div className="md:col-span-3">
                  <span className={`font-mono text-sm tracking-wider transition-colors duration-300 ${hoveredId === exp.id ? 'text-neon' : 'text-gray-500'}`}>
                    {exp.period}
                  </span>
                </div>

                {/* Content - Right Column on Desktop */}
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-white transition-colors duration-300 text-gray-200">
                    {exp.role} <span className="text-gray-500 font-light">@ {exp.company}</span>
                  </h3>
                  
                  <ul className="mb-6 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-400 font-light text-sm md:text-base leading-relaxed flex items-start">
                        <span className="mr-3 text-neon opacity-50 mt-1.5 text-[10px]">■</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-mono border border-gray-800 rounded-full text-gray-500 group-hover:border-neon/30 group-hover:text-neon/80 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;