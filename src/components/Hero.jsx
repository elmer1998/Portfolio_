import { useState, useEffect } from "react";
import { HiArrowNarrowRight, HiChevronRight, HiTerminal, HiCode } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  // Added LUKZ to the typing string
  const fullText = "npm init @lukz/creative-solutions --save-dev";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#020617] text-slate-300 px-6 py-20 overflow-hidden font-['JetBrains_Mono',monospace]"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#6366f1 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full delay-700"></div>

      <div className="z-10 max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT (7 Columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-indigo-500/5 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(79,70,229,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available_for_New_Deployments
          </div>

          <div className="relative inline-block">
             <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.9]">
               <span className="text-indigo-500 text-2xl md:text-3xl block font-bold mb-2 opacity-80">{'<Developer />'}</span>
               ELMER ALEXIS <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">ALICAWAY</span>
             </h1>
             
             {/* NICKNAME BADGE */}
             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1, type: "spring" }}
               className="absolute -top-4 -right-8 md:-right-12 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1 rounded-md rotate-12"
             >
                <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest italic">aka: "LUKZ"</span>
             </motion.div>
          </div>

          <div className="flex items-center gap-4 mb-10 group cursor-default">
             <div className="h-px w-12 bg-indigo-500/50 group-hover:w-20 transition-all duration-500"></div>
             <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
               Architecting <span className="text-indigo-400 font-bold">Full-Stack</span> applications with a focus on 
               <span className="text-white"> performance</span> and <span className="text-white">scalability</span>.
             </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-md font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]"
            >
              <HiTerminal className="text-lg" />
              View_Work
              <HiArrowNarrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              href="#contact"
              className="px-8 py-4 border border-white/10 text-white rounded-md font-bold text-xs uppercase tracking-[0.2em] transition-all"
            >
              Get_In_Touch
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT TERMINAL (5 Columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="relative bg-[#0b0e14]/90 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-indigo-500/30">
            
            <div className="flex items-center justify-between px-5 py-4 bg-white/5 border-b border-white/5">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center gap-2 text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                <HiCode className="text-indigo-500 text-xs" />
                lukz_session — 1248kb
              </div>
            </div>

            <div className="p-8 text-sm leading-relaxed font-['Fira_Code',monospace]">
              <div className="flex gap-3 mb-4">
                <span className="text-indigo-500">1</span>
                <p><span className="text-pink-500">import</span> {'{ Lukz }'} <span className="text-pink-500">from</span> <span className="text-green-400">'@ph-talent'</span>;</p>
              </div>
              
              <div className="flex gap-3 mb-6">
                <span className="text-indigo-500">2</span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-indigo-400">➜</span>
                  <span className="text-white">{text}</span>
                  <span className="w-1.5 h-5 bg-indigo-500 animate-pulse"></span>
                </div>
              </div>

              <div className="space-y-2 opacity-80">
                <div className="flex gap-3">
                   <span className="text-indigo-500">3</span>
                   <p className="text-slate-500">{'// Initializing Lukz.core...'}</p>
                </div>
                <div className="flex gap-3 pl-4">
                   <span className="text-indigo-500">4</span>
                   <p className="text-yellow-400">
                     [<span className="text-indigo-400">'React'</span>, <span className="text-indigo-400">'Node'</span>, <span className="text-indigo-400">'AWS'</span>]
                   </p>
                </div>
                <div className="flex gap-3">
                   <span className="text-indigo-500">5</span>
                   <p className="text-slate-500">{'// Environment: Stable'}</p>
                </div>
                <div className="flex gap-3 pl-4">
                   <span className="text-indigo-500">6</span>
                   <div className="flex items-center gap-2 text-green-400">
                     <HiChevronRight />
                     <span>Welcome back, Lukz.</span>
                   </div>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between pt-4 border-t border-white/5 text-[10px] text-slate-500 uppercase font-bold">
                 <div className="flex gap-4">
                    <span>UTF-8</span>
                    <span className="text-indigo-500">Profile.bash</span>
                 </div>
                 <div className="flex gap-4">
                    <span>Admin: Lukz</span>
                    <span className="text-green-500 animate-pulse">● Active</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-600/10 border border-white/5 backdrop-blur-md rounded-lg rotate-12 -z-10 group-hover:rotate-45 transition-transform duration-700"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/10 border border-white/5 backdrop-blur-md rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
        </motion.div>

      </div>
    </section>
  );
}