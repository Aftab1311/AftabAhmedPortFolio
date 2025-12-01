import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 bg-charcoal relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-neon opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              WHO_AM_I?
            </h2>
            <div className="h-1.5 w-24 bg-neon shadow-[0_0_15px_#c2f970]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg font-light leading-relaxed"
          >
            <p>
              I am a{" "}
              <strong className="text-white">Full Stack Developer</strong> with
              a background in digital design. My philosophy is simple: code is
              the tool, but{" "}
              <span className="text-neon underline decoration-neon/30 underline-offset-4">
                experience
              </span>{" "}
              is the product.
            </p>
            <p>
              Moving beyond standard templates, I specialize in building
              immersive web applications that merge robust backend logic with
              fluid, motion-rich frontends. I don't just write functions; I
              craft digital ecosystems.
            </p>
            <p>
              When I'm not debugging microservices or tweaking bezier curves,
              you can find me exploring cyberpunk literature, experimenting with
              generative art, or optimizing my coffee brewing variables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 pt-8 border-t border-gray-800 flex gap-12"
          >
            <div>
              <span className="block text-4xl font-bold text-white mb-1">
                02+
              </span>
              <span className="text-xs font-mono text-gray-500 tracking-widest">
                YEARS_EXP
              </span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-white mb-1">
                15+
              </span>
              <span className="text-xs font-mono text-gray-500 tracking-widest">
                PROJECTS
              </span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-white mb-1">
                100%
              </span>
              <span className="text-xs font-mono text-gray-500 tracking-widest">
                COMMITTED
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual "Data Card" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Card Container */}
          <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-neon/50 transition-colors duration-500">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent h-[10px] w-full animate-[scan_4s_linear_infinite] pointer-events-none opacity-50" />

            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="font-mono text-xs text-gray-600">
                user_profile.json
              </div>
            </div>

            <div className="font-mono text-sm space-y-4">
              <div className="flex border-b border-gray-800 pb-2">
                <span className="text-gray-500 w-24">CLASS</span>
                <span className="text-neon">Technomancer</span>
              </div>
              <div className="flex border-b border-gray-800 pb-2">
                <span className="text-gray-500 w-24">BASE</span>
                <span className="text-white">Delhi, India</span>
              </div>
              <div className="flex border-b border-gray-800 pb-2">
                <span className="text-gray-500 w-24">LANGS</span>
                <span className="text-white">HINDI (Native), EN (UK)</span>
              </div>
              <div className="flex border-b border-gray-800 pb-2">
                <span className="text-gray-500 w-24">FOCUS</span>
                <span className="text-white">Perf, UX, Motion</span>
              </div>
              <div className="flex pt-2">
                <span className="text-gray-500 w-24">STATUS</span>
                <span className="flex items-center gap-2 text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Open to Work
                </span>
              </div>
            </div>

            {/* ASCII Art or Decorative Graphic */}
            <div className="mt-8 text-[10px] leading-none text-gray-700 font-mono select-none opacity-50">
              {`
   __
 _/o \\_
( \\_  )
/ / \\ \\
\\_) (_/
               `}
            </div>

            <div className="absolute bottom-4 right-4 text-neon text-xs font-mono opacity-50">
              ID: #8X-92
            </div>
          </div>

          {/* Offset Border Effect */}
          <div className="absolute top-4 left-4 w-full h-full border border-neon/20 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
