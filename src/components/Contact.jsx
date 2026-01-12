import { HiTerminal, HiCode } from "react-icons/hi"; 
import { HiArrowRight, HiLockClosed, HiServer, HiCpuChip, HiGlobeAlt } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#020617] text-slate-300 px-4 sm:px-6 font-['JetBrains_Mono',monospace] overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER: IMPROVISED RESPONSIVE TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 text-indigo-500 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-indigo-500/30"></div>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">Initialize_Handshake</span>
          </div>
          
          {/* Fix: Responsive font sizes and better line height */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter lowercase leading-[1.1] md:leading-none break-words">
            Establish_<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Link</span>
          </h2>

          {/* Fix: Flex-wrap for long terminal commands on mobile */}
          <div className="mt-4 text-slate-500 text-[10px] md:text-xs flex flex-wrap items-center gap-2">
            <HiTerminal className="text-indigo-500 shrink-0" /> 
            <span className="opacity-70">user@alicaway_sys:~$</span> 
            <span className="text-indigo-400 font-bold">sudo connect --target=ea_alicaway</span>
          </div>
        </motion.div>

        {/* MAIN INTERFACE */}
        <div className="relative group">
          {/* Corner accents hidden on very small screens for cleaner look */}
          <div className="hidden sm:block absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-lg"></div>
          <div className="hidden sm:block absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-indigo-500/30 rounded-br-lg"></div>

          <div className="grid lg:grid-cols-5 gap-px bg-white/5 border border-white/10 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm">
            
            {/* LEFT SIDE: SYSTEM SPECS */}
            <div className="lg:col-span-2 bg-[#0b0e14]/90 p-6 md:p-12 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
              <HiCpuChip size={300} className="absolute -bottom-20 -left-20 text-indigo-500/[0.03] pointer-events-none rotate-12" />
              
              <div className="relative z-10 space-y-8 md:space-y-10">
                {/* Diagnostics Box */}
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-lg space-y-3">
                  <div className="flex justify-between items-center text-[8px] md:text-[9px] font-bold uppercase">
                    <span className="text-slate-500">Latency</span>
                    <span className="text-emerald-500">12ms</span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] md:text-[9px] font-bold uppercase">
                    <span className="text-slate-500">Uptime</span>
                    <span className="text-indigo-400">99.9%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div className="group/item">
                    <p className="text-indigo-500 text-[8px] md:text-[9px] uppercase font-black mb-2 tracking-widest flex items-center gap-2">
                      <HiGlobeAlt size={12} /> Remote_Host
                    </p>
                    <a href="mailto:alicawayelmeralexis@gmail.com" className="text-xs sm:text-sm md:text-base text-slate-200 hover:text-indigo-400 transition-all font-bold break-all">
                      "alicawayelmeralexis@gmail.com"
                    </a>
                  </div>

                  <div>
                    <p className="text-indigo-500 text-[8px] md:text-[9px] uppercase font-black mb-2 tracking-widest flex items-center gap-2">
                      <HiServer size={12} /> Origin_Node
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-200 font-bold italic">"Davao_Region, PH"</p>
                  </div>

                  <div>
                    <p className="text-indigo-500 text-[8px] md:text-[9px] uppercase font-black mb-4 tracking-widest">External_Ports</p>
                    <div className="flex gap-2 md:gap-3">
                      <motion.a whileHover={{ y: -2 }} href="https://github.com/elmer1998" target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 rounded-md text-[10px] font-bold transition-all">
                        <FaGithub /> GH
                      </motion.a>
                      <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/elmer-alexis-alicaway-04a300189" target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 rounded-md text-[10px] font-bold transition-all">
                        <FaLinkedin /> LN
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="lg:col-span-3 bg-[#050816]/40 p-6 md:p-12 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                  <span className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Building_Payload...</span>
                </div>
                <HiLockClosed className="text-indigo-500/20" size={18} />
              </div>

              <form className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="relative">
                    <input type="text" required id="name" className="peer w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm placeholder:opacity-0" />
                    <label htmlFor="name" className="absolute left-0 top-0 text-[9px] font-black uppercase text-slate-600 transition-all peer-focus:-top-5 peer-focus:text-indigo-400 peer-valid:-top-5">{"<sender_identity>"}</label>
                  </div>
                  <div className="relative">
                    <input type="email" required id="email" className="peer w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500 text-sm placeholder:opacity-0" />
                    <label htmlFor="email" className="absolute left-0 top-0 text-[9px] font-black uppercase text-slate-600 transition-all peer-focus:-top-5 peer-focus:text-indigo-400 peer-valid:-top-5">{"<return_path>"}</label>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-black uppercase text-slate-600 mb-2 tracking-widest">{"<message_buffer>"}</label>
                  <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-indigo-500 text-sm resize-none" placeholder="// Inject message data here..."></textarea>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="group relative w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-4 bg-white text-black font-black uppercase tracking-[0.15em] text-[10px] rounded hover:bg-indigo-600 hover:text-white transition-all overflow-hidden"
                >
                  <span className="relative z-10">Transmit_Payload()</span>
                  <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.button>
              </form>

              <div className="mt-8 md:mt-12 flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 text-[8px] text-slate-700 font-bold uppercase tracking-widest">
                  <HiCode className="text-indigo-500/40" />
                  <span>Protocol_v3.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}