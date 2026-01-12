import { 
  HiCode, 
  HiInformationCircle, 
  HiLightningBolt, 
  HiChip, 
  HiDatabase, 
  HiChatAlt2, 
  HiExternalLink,
  HiTerminal,
  HiFolder,
  HiClock
} from "react-icons/hi";
import { HiCpuChip } from "react-icons/hi2";
import { motion } from "framer-motion";

const getProjectIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("ai") || n.includes("rag")) return <HiLightningBolt />;
  if (n.includes("http") || n.includes("server") || n.includes("c++")) return <HiCpuChip />;
  if (n.includes("erp") || n.includes("manufacturing")) return <HiDatabase />;
  if (n.includes("chat")) return <HiChatAlt2 />;
  return <HiCode />;
};

export default function Projects() {
  const projects = [
    {
      name: "Personal AI RAG Assistant",
      description: "Local RAG engine with FastAPI and Qwen 2.5. Vector pipeline using ChromaDB for deep document analysis.",
      tags: ["FastAPI", "LangChain", "ChromaDB"],
      status: "Stable",
      id: "01",
      link: null,
      branch: "main",
      size: "1.2gb"
    },
    {
      name: "High-Performance HTTP Server",
      description: "Custom C++ multi-threaded architecture handling 100+ concurrent TCP handshakes with zero-copy logic.",
      tags: ["C++", "WinSock2", "Networking"],
      status: "Stable",
      id: "02",
      link: null,
      branch: "v1.0-release",
      size: "450kb"
    },
    {
      name: "Simple Task Management",
      description: "Full-stack productivity engine featuring JWT auth and real-time state sync with Django backend.",
      tags: ["React", "Django", "JWT"],
      status: "Stable",
      id: "03",
      link: null,
      branch: "stable",
      size: "14mb"
    },
    {
      name: "Lukz ERP System",
      description: "Enterprise solution for production logs. Improved data entry efficiency by 40%. Fully deployed on GitHub Pages.",
      tags: ["Next.js", "Django", "MySQL"],
      status: "Stable",
      id: "04",
      link: "https://tsakamaki4-alt.github.io/lukz_erp_frontend/",
      branch: "production",
      size: "8.5mb"
    },
    {
      name: "Real-time Chat Application",
      description: "Secure messaging platform utilizing WebSockets for instant data synchronization across clients.",
      tags: ["Node.js", "Socket.io", "React"],
      status: "Dev",
      id: "05",
      link: null,
      branch: "beta",
      size: "2.1mb"
    },
    {
      name: "Responsive Blog & CMS",
      description: "Modern headless CMS featuring Markdown support and SEO optimization with a custom Django admin.",
      tags: ["React", "Tailwind", "Django"],
      status: "Dev",
      id: "06",
      link: null,
      branch: "feature/cms",
      size: "5.4mb"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 bg-[#020617] text-slate-300 px-6 font-['JetBrains_Mono',monospace] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-indigo-500 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <HiTerminal size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Querying_Repository_Index...</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            BUILD_<span className="text-indigo-500 italic">LOGS</span>
          </h2>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.name}
              variants={itemVariants}
              className="group relative flex flex-col bg-[#0b0e14]/50 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.1)]"
            >
              {/* TOP HEADER BAR (Window Controls) */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                 <div className="flex gap-1.5">
                    <HiFolder className="text-indigo-500/50" size={14} />
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{proj.id}.project_meta</span>
                 </div>
                 <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[8px] font-black uppercase tracking-widest
                    ${proj.status === "Stable" ? "border-emerald-500/20 text-emerald-500 bg-emerald-500/5" : "border-amber-500/20 text-amber-500 bg-amber-500/5"}`}>
                    <span className={`w-1 h-1 rounded-full animate-pulse ${proj.status === "Stable" ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                    {proj.status}
                 </div>
              </div>

              {/* CARD BODY */}
              <div className="p-8 flex-1">
                <div className="mb-6 flex justify-between items-start">
                   <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {getProjectIcon(proj.name)}
                   </div>
                   <div className="text-right">
                      <p className="text-[8px] text-slate-600 uppercase font-bold tracking-widest">Branch</p>
                      <p className="text-[10px] text-indigo-400 font-bold">*{proj.branch}</p>
                   </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                  {proj.name}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-500 mb-8 font-['Inter',sans-serif]">
                  {proj.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded text-slate-400 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER BAR */}
              <div className="mt-auto px-8 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between group-hover:bg-indigo-500/5 transition-colors">
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="flex items-center gap-1">
                    <HiClock size={12} />
                    <span className="text-[9px] font-bold uppercase">{proj.size}</span>
                  </div>
                </div>

                {proj.link ? (
                  <a 
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-black text-white hover:text-indigo-400 transition-all uppercase tracking-widest"
                  >
                    Deploy_Live <HiExternalLink />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase tracking-widest cursor-default">
                    Read_Only <HiCode />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM STATUS BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex gap-4 items-start">
            <HiInformationCircle className="text-indigo-500 shrink-0" size={24} />
            <div>
              <p className="text-[12px] leading-relaxed text-slate-400 max-w-xl">
                <span className="text-white font-bold uppercase">System Note:</span> All artifacts marked as <span className="text-emerald-500">Stable</span> have passed end-to-end testing protocols. Source code for proprietary projects remains private.
              </p>
            </div>
          </div>
          <div className="px-6 py-2 bg-indigo-500 rounded text-black font-black text-[10px] uppercase tracking-widest hover:bg-indigo-400 transition-colors cursor-pointer text-center">
            View_GitHub_Archive
          </div>
        </motion.div>
      </div>
    </section>
  );
}