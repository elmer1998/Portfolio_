import { HiDownload, HiLightningBolt, HiLocationMarker, HiTerminal } from "react-icons/hi";
import { HiCpuChip, HiShieldCheck, HiLink } from "react-icons/hi2"; 
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32 px-8 py-24 bg-[#020617] text-slate-400 font-['JetBrains_Mono',monospace] overflow-hidden"
    >
      {/* Background Subtle Hardware Decor */}
      <div className="absolute top-1/4 right-0 opacity-[0.03] pointer-events-none">
        <HiCpuChip size={600} className="text-indigo-500 rotate-12" />
      </div>

      {/* LEFT SIDE: ENLARGED IDE-Style Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group lg:order-2"
      >
        {/* Glow Aura */}
        <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
        
        {/* The Frame: Increased width to w-80 and sm:w-96 */}
        <div className="relative w-80 h-[480px] sm:w-[400px] sm:h-[550px] bg-[#0b0e14] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-indigo-500/40">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">profile_view.exec</span>
          </div>
          
          {/* Image with Scanline Effect */}
          <div className="relative h-full w-full">
            <img 
              src="./about_me.jpg" 
              alt="EA Alicaway" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-70 group-hover:opacity-100 scale-105 group-hover:scale-100" 
            />
            {/* Moving Scanline */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-indigo-500/30 z-20 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
          </div>

          {/* Overlay Status */}
          <div className="absolute top-16 right-4 flex flex-col gap-2">
            <div className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[8px] text-emerald-400 font-bold">
              AUTH: VERIFIED
            </div>
            <div className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[8px] text-indigo-400 font-bold">
              LVL: JUNIOR_DEV
            </div>
          </div>

        </div>

        {/* Floating Data Decor */}
        <div className="hidden xl:block absolute -right-20 top-1/4 space-y-4">
           <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold">
             <HiShieldCheck className="text-indigo-500" /> SYSTEM_ENCRYPTED
           </div>
           <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold">
             <HiLink className="text-indigo-500" /> PORT_8080: OPEN
           </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-left max-w-2xl z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <HiTerminal className="text-indigo-500 text-xl" />
          <span className="text-indigo-500/60 text-[10px] font-black tracking-[0.3em] uppercase">./Who_Am_I.sh</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-white leading-[0.9]">
          Engineered for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Performance.</span>
        </h2>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed border-l-2 border-indigo-500/20 pl-10 relative">
          <div className="p-4 bg-white/[0.03] rounded-lg border border-white/5 inline-block">
            <p className="font-bold">
              <span className="text-indigo-400">class</span> <span className="text-white">Developer</span> {'{'} <br />
              &nbsp;&nbsp;name = <span className="text-green-400">"Elmer Alexis Alicaway"</span>;<br />
              &nbsp;&nbsp;focus = <span className="text-green-400">["Scalability", "UX", "RAG"]</span>;<br />
              {'}'}
            </p>
          </div>

          <p className="text-slate-400 max-w-lg">
            My engineering philosophy centers on the idea that 
            <span className="text-white font-bold"> code efficiency</span> should never sacrifice 
            <span className="text-indigo-400"> user experience</span>. I build architectures that are as 
            robust as they are elegant.
          </p>

          <div className="relative bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-xl group/box hover:border-indigo-500/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <HiLightningBolt className="text-yellow-500 animate-pulse" />
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em]">
                Current_Intelligence_Log
              </h4>
            </div>
            
            <p className="text-[13px] text-slate-400 italic leading-relaxed">
              Currently exploring <span className="text-indigo-400 font-bold underline underline-offset-4">RAG Pipelines </span> 
              to bridge the gap between LLMs and real-time private datasets.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-10">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="./Resume.pdf" 
            download
            className="group flex items-center px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[11px] rounded transition-all shadow-2xl shadow-white/5 hover:bg-indigo-600 hover:text-white"
          >
            <HiDownload className="mr-3 text-xl" />
            Download_CV.exe
          </motion.a>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]"></div>
              <span className="text-[11px] font-black text-white tracking-[0.2em] uppercase">Status: Live</span>
            </div>
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest pl-5">Kernel: Stable</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}