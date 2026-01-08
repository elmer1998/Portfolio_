import { useState, useEffect } from "react";
import { HiArrowNarrowRight, HiTerminal, HiChevronRight } from "react-icons/hi";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "npm install creativity@latest excellence --save";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#020617] text-slate-300 px-6 overflow-hidden font-['JetBrains_Mono',monospace]"
    >
      {/* Background: Coding Grid & Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="z-10 max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text & CTA */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white/5 border border-white/10 rounded text-indigo-400 text-[10px] uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            system_online: v2.0.26
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tighter text-white leading-none">
            <span className="text-indigo-500 italic text-2xl sm:text-3xl block font-light">class</span>
            EA_<span className="text-indigo-400">ALICAWAY</span>
          </h1>

          <p className="text-base sm:text-lg mb-10 text-slate-400 leading-relaxed max-w-md">
            I build <span className="text-white border-b border-indigo-500/50">robust architectures</span> for the modern web, bridging the gap between human needs and machine logic.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
            >
              Execute_Projects()
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/10 text-white rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-white/5"
            >
              View_Source
            </a>
          </div>
        </div>

        {/* Right Side: Terminal Window Component */}
        <div className="relative hidden lg:block group">
          {/* Glassmorphism Terminal */}
          <div className="relative bg-[#0b0e14]/80 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">bash — 80x24</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-sm sm:text-base leading-relaxed">
              <div className="flex gap-2 mb-2">
                <span className="text-green-400">➜</span>
                <span className="text-indigo-400">~</span>
                <span className="text-white">{text}</span>
                <span className="w-2 h-5 bg-indigo-500 animate-[blink_1s_infinite]"></span>
              </div>
              
              <div className="mt-4 space-y-1">
                <p className="text-slate-500 italic">{"// Initializing core skills..."}</p>
                <p className="flex gap-4">
                  <span className="text-indigo-400">React</span>
                  <span className="text-indigo-400">Node.js</span>
                  <span className="text-indigo-400">Python</span>
                </p>
                <p className="text-slate-500 italic">{"// Loading projects..."}</p>
                <div className="flex items-center gap-2 text-yellow-400">
                  <HiChevronRight />
                  <span>Portfolio_v2.zip [Completed]</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <HiChevronRight />
                  <span>AI_Chat_Interface [In Progress]</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-indigo-400">~</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow behind terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        </div>

      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}