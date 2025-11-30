import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="px-6 md:px-12 py-20 border-t border-gray-800 bg-[#111] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="font-mono text-neon text-sm mb-4 block">Let's work together</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    GOT A <br/> PROJECT?
                </h2>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-4 text-xl hover:text-neon transition-colors duration-300 font-mono border-b border-gray-700 pb-2 hover:border-neon">
                    md.aftabehsan@gmail.com
                </a>
            </div>

            <div className="flex flex-col gap-6 md:items-end font-mono text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">GITHUB</a>
                <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-white transition-colors">TWITTER (X)</a>
                <div className="h-12"></div>
                <span>© 2024 DEV.LOG</span>
            </div>
        </div>

        {/* Big Background Text */}
        <div className="absolute bottom-[-5%] left-10 w-full text-center pointer-events-none select-none overflow-hidden">
            <span className="text-[10vw] font-bold text-[#1a1a1a] opacity-40 leading-none tracking-tighter">
                CREATIVE
            </span>
        </div>
    </footer>
  );
};

export default Footer;