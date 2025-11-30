import React from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-40 mix-blend-difference"
    >
      <a href="#" className="text-xl md:text-2xl font-bold font-mono tracking-tighter hover:text-neon transition-colors duration-300">
        DEV<span className="text-neon">.</span>AFTAB
      </a>

      <ul className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href}
              className="font-mono text-sm uppercase tracking-widest hover:text-neon transition-all duration-300 relative group"
            >
              <span className="text-neon opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 absolute left-[-10px]"></span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Icon (Simplified) */}
      <div className="md:hidden space-y-1.5 cursor-pointer hover-trigger">
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white ml-auto"></div>
      </div>
    </motion.nav>
  );
};

export default NavBar;