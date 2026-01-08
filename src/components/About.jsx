import { HiDownload, HiLightningBolt, HiLocationMarker, HiCode } from "react-icons/hi";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24 px-8 py-24 bg-[#020617] text-slate-400 font-['JetBrains_Mono',monospace] overflow-hidden"
    >
      {/* Profile Image - IDE Tab Style */}
      <div className="relative group lg:order-2">
        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-indigo-500/10 rounded-xl blur-2xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
        
        {/* Image Container resembling a File Preview */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 bg-[#0b0e14] border border-white/10 rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          {/* Header Bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <span className="text-[9px] uppercase tracking-widest text-slate-500">profile_picture.jpg</span>
          </div>
          
          <img 
            src="/Portfolio_/about_me.jpg" 
            alt="EA Alicaway" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
          />

          {/* Location Tag - Terminal Style */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#020617]/90 backdrop-blur-md border border-white/10 p-3 rounded-md flex items-center gap-3">
            <HiLocationMarker className="text-indigo-500" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-300">
              LOC: <span className="text-white">Davao_Region, PH</span>
            </span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="text-left max-w-2xl z-10">
        <div className="flex items-center gap-3 mb-4">
          <HiCode className="text-indigo-500 text-xl" />
          <span className="text-indigo-500/50 text-sm font-light italic">{"<biography>"}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter text-white">
          Decoding the <br />
          <span className="text-indigo-500">Human Behind the Code</span>
        </h2>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed border-l-2 border-indigo-500/20 pl-6">
          <p>
            I am <span className="text-white font-bold">Elmer Alexis Alicaway</span>. My engineering philosophy is built on the belief that 
            <span className="text-slate-200"> code efficiency</span> should never compromise 
            <span className="text-indigo-400"> user accessibility</span>.
          </p>

          <p>
            Operating at the intersection of <span className="text-white">Frontend Logic</span> and 
            <span className="text-white"> Backend Architecture</span>, I focus on building systems that are as 
            resilient as they are intuitive.
          </p>

          {/* Technical Focus Box */}
          <div className="relative bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-md mt-10 overflow-hidden group/box">
            <div className="flex items-center gap-3 mb-3">
              <HiLightningBolt className="text-yellow-500 animate-pulse" />
              <h4 className="text-indigo-400 font-bold text-[10px] uppercase tracking-widest">
                Current_Research.log
              </h4>
            </div>
            
            <p className="text-[13px] text-slate-400">
              Investigating <span className="text-white">Retrieval-Augmented Generation (RAG)</span> 
              to implement context-aware AI models within edge environments.
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="/Portfolio_/Elmer Alexis - Resume.pdf" 
            download="Elmer Alexis - Resume.pdf"
            className="group flex items-center px-6 py-3 bg-white text-black hover:bg-indigo-500 hover:text-white font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95"
          >
            <HiDownload className="mr-2 text-base group-hover:-translate-y-1 transition-transform" />
            fetch_resume.exe
          </a>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Status: <span className="text-slate-300">Open_for_Collaborations</span>
            </span>
          </div>
        </div>
        
        <div className="mt-4 text-indigo-500/50 text-sm font-light italic">{"</biography>"}</div>
      </div>
    </section>
  );
}