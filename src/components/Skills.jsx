import { 
  HiCode, 
  HiDatabase, 
  HiTerminal, 
  HiServer,
  HiChevronRight,
  HiVariable
} from "react-icons/hi";

export default function Skills() {
  const categories = [
    {
      title: "frontend_arch",
      icon: <HiCode />,
      color: "text-indigo-400",
      skills: ["React 18", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"]
    },
    {
      title: "backend_systems",
      icon: <HiServer />,
      color: "text-emerald-400",
      skills: ["Python/Django", "Node.js", "FastAPI", "PHP/Laravel", "REST_APIs"]
    },
    {
      title: "data_persistence",
      icon: <HiDatabase />,
      color: "text-amber-400",
      skills: ["PostgreSQL", "MySQL", "ChromaDB", "MongoDB", "Redis"]
    },
    {
      title: "infrastructure",
      icon: <HiTerminal />,
      color: "text-rose-400",
      skills: ["C++_Systems", "Git/GitHub", "Docker", "Socket.io", "Linux_CLI"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#020617] text-slate-300 px-6 font-['JetBrains_Mono',monospace]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header styled as a Terminal Command */}
        <div className="mb-20">
          <div className="flex items-center gap-2 text-indigo-500 mb-4">
            <HiVariable />
            <span className="text-xs font-bold uppercase tracking-widest">cat system_capabilities.json</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Technical_<span className="text-indigo-500">Stack</span>
          </h2>
        </div>

        {/* Categories Grid - Tree View Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {categories.map((cat) => (
            <div 
              key={cat.title} 
              className="group bg-[#020617] p-8 hover:bg-white/[0.01] transition-colors relative overflow-hidden"
            >
              {/* Background Label */}
              <div className="absolute right-[-10px] top-[-10px] text-6xl font-bold opacity-[0.02] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                {cat.title.split('_')[0]}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className={`${cat.color} text-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white lowercase">
                  <span className="text-slate-600">const</span> {cat.title} <span className="text-indigo-500">=</span> [
                </h3>
              </div>

              {/* Skills List with Code Line Numbers */}
              <div className="grid grid-cols-1 gap-y-3 pl-8 border-l border-white/10">
                {cat.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-4 group/item"
                  >
                    <span className="text-[10px] text-slate-600 w-4 select-none">0{index + 1}</span>
                    <HiChevronRight className="text-indigo-500/50 group-hover/item:text-indigo-500 transition-colors" />
                    <span className="text-sm tracking-tight text-slate-400 group-hover/item:text-white transition-colors">
                      "{skill}"{index !== cat.skills.length - 1 ? "," : ""}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-lg font-bold text-white lowercase">
                ];
              </div>
            </div>
          ))}
        </div>

        {/* Footer Prompt */}
        <div className="mt-16 flex items-center gap-4 text-slate-500">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Compiler: Ready</span>
          </span>
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold">v1.4.0_STABLE</span>
        </div>
      </div>
    </section>
  );
}