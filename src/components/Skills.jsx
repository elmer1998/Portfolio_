import { 
  HiCode, 
  HiDatabase, 
  HiTerminal, 
  HiServer,
  HiChevronRight,
  HiVariable,
  HiLightningBolt
} from "react-icons/hi";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-[#020617] text-slate-300 px-6 font-['JetBrains_Mono',monospace] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER: TERMINAL STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-indigo-500 mb-4 bg-indigo-500/5 w-fit px-3 py-1 rounded border border-indigo-500/10">
            <HiVariable className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">fetch system.capabilities --json</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            TECH_<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">MANIFEST</span>
          </h2>
          <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs">
            <span className="text-emerald-500">●</span> root/skills/manifest.json
          </div>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div 
              key={cat.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="group bg-[#0b0e14]/50 border border-white/5 rounded-xl p-8 hover:border-indigo-500/20 transition-all relative overflow-hidden"
            >
              {/* Decorative Scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none group-hover:via-indigo-500/[0.03] transition-all"></div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                   <div className={`${cat.color} p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                    <span className="text-pink-500">export</span> 
                    <span className="text-indigo-400">const</span> 
                    {cat.title} 
                    <span className="text-indigo-500">=</span>
                  </h3>
                </div>
                <HiLightningBolt className={`${cat.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
              </div>

              {/* CODE BLOCK UI */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="space-y-3 pl-4 border-l-2 border-white/5 group-hover:border-indigo-500/20 transition-colors"
              >
                <div className="text-slate-600 text-[10px] mb-1">{'['}</div>
                {cat.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-4 group/item"
                  >
                    <span className="text-[10px] text-slate-700 w-4 select-none italic">{index + 10}</span>
                    <HiChevronRight size={12} className="text-indigo-500/30 group-hover/item:text-indigo-500 group-hover/item:translate-x-1 transition-all" />
                    <span className="text-sm tracking-tight text-slate-400 group-hover/item:text-green-400 transition-colors">
                      <span className="text-slate-500">'</span>{skill}<span className="text-slate-500">'</span>
                      {index !== cat.skills.length - 1 ? <span className="text-slate-500">,</span> : ""}
                    </span>
                  </motion.div>
                ))}
                <div className="text-slate-600 text-[10px] mt-1">{']'}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* SYSTEM STATUS BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-[#0b0e14] border border-white/5 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Environment: Stable</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-white/10"></div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              Last_Update: <span className="text-indigo-400">Jan_2026</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full border-2 border-[#0b0e14] bg-indigo-500/20 flex items-center justify-center">
                    <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                  </div>
                ))}
             </div>
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Stack_Integrity: 100%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}