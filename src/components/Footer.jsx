import { HiTerminal, HiOutlineShieldCheck, HiOutlineDatabase, HiOutlineCloudUpload } from "react-icons/hi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#020617] border-t border-white/5 font-['JetBrains_Mono',monospace]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUMN 1: SYSTEM IDENTITY */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-indigo-500">
              <HiTerminal size={20} />
              <span className="text-sm font-bold tracking-tighter uppercase">ALICAWAY_OS v2.4</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Built with <span className="text-slate-300">React 18</span>, 
              <span className="text-slate-300"> Framer Motion</span>, and 
              <span className="text-slate-300"> TailwindCSS</span>. 
              Rendered in Davao, PH.
            </p>
          </div>

          {/* COLUMN 2: SERVER LOGS (Decorative) */}
          <div className="hidden md:block space-y-2">
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">System_Logs</span>
            <div className="text-[10px] space-y-1">
              <div className="flex gap-2 text-emerald-500/60">
                <span>[OK]</span> <span className="text-slate-500">Portfolio_Data_Loaded</span>
              </div>
              <div className="flex gap-2 text-indigo-500/60">
                <span>[INFO]</span> <span className="text-slate-500">Connection_Secure_TLS_1.3</span>
              </div>
              <div className="flex gap-2 text-amber-500/60 animate-pulse">
                <span>[LIVE]</span> <span className="text-slate-400 font-bold italic underline">Awaiting_Inquiry...</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: QUICK LINKS / METRICS */}
          <div className="flex flex-col md:items-end justify-center space-y-4">
             <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <a href="#about" className="hover:text-indigo-400 transition-colors">.root</a>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">.work</a>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">.stack</a>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">.ping</a>
             </div>
             <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded border border-white/5">
                <HiOutlineShieldCheck className="text-emerald-500" />
                <span className="text-[10px] text-slate-400 font-bold">ENCRYPTED_SESSION</span>
             </div>
          </div>
        </div>

        {/* BOTTOM STATUS BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold tracking-[0.2em] uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
              SYSTEM_READY
            </span>
            <span className="hidden md:block">|</span>
            <span className="flex items-center gap-2">
              <HiOutlineDatabase /> DB_SYNC: ACTIVE
            </span>
          </div>

          <div>
             © 2026 ELMER_ALEXIS_ALICAWAY // NO_TRACKING_ENABLED
          </div>

          <div className="flex items-center gap-4 bg-indigo-500/5 px-3 py-1 rounded text-indigo-400 border border-indigo-500/10">
            <HiOutlineCloudUpload className="animate-bounce" />
            <span>LOC: {time} (UTC+8)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}