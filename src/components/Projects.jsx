import { 
  HiCode, 
  HiCheckCircle, 
  HiInformationCircle, 
  HiLightningBolt, 
  HiChip, 
  HiDatabase, 
  HiChatAlt2, 
  HiRefresh,
  HiExternalLink,
  HiTerminal
} from "react-icons/hi";

const getProjectIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("ai") || n.includes("rag")) return <HiLightningBolt size={20} />;
  if (n.includes("http") || n.includes("server") || n.includes("c++")) return <HiChip size={20} />;
  if (n.includes("erp") || n.includes("manufacturing")) return <HiDatabase size={20} />;
  if (n.includes("chat")) return <HiChatAlt2 size={20} />;
  return <HiCode size={20} />;
};

export default function Projects() {
  const projects = [
    {
      name: "Personal AI RAG Assistant",
      description: "Local RAG engine with FastAPI and Qwen 2.5. Vector pipeline using ChromaDB.",
      tags: ["FastAPI", "LangChain", "ChromaDB"],
      status: "Stable",
      id: "01",
      link: null // Add links as they become available
    },
    {
      name: "High-Performance HTTP Server",
      description: "Custom C++ multi-threaded architecture handling 100+ concurrent TCP handshakes.",
      tags: ["C++", "WinSock2", "Networking"],
      status: "Stable",
      id: "02",
      link: null
    },
    {
      name: "Simple Task Management",
      description: "Full-stack productivity engine featuring JWT auth and real-time state sync.",
      tags: ["React", "Django", "JWT"],
      status: "Stable",
      id: "03",
      link: null
    },
    {
      name: "Lukz ERP System",
      description: "Enterprise solution for production logs. Improved data entry efficiency by 40%. Fully deployed on GitHub Pages and PythonAnywhere.",
      tags: ["Next.js", "Django", "MySQL"],
      status: "Stable", // Upgraded to stable since it's live!
      id: "04",
      link: "https://tsakamaki4-alt.github.io/lukz_erp_frontend/" 
    },
    {
      name: "Real-time Chat Application",
      description: "Secure messaging platform utilizing WebSockets for instant data synchronization.",
      tags: ["Node.js", "Socket.io", "React"],
      status: "Dev",
      id: "05",
      link: null
    },
    {
      name: "Responsive Blog & CMS",
      description: "Modern headless CMS featuring Markdown support and SEO optimization.",
      tags: ["React", "Tailwind", "Django"],
      status: "Dev",
      id: "06",
      link: null
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#020617] text-slate-300 px-6 font-['JetBrains_Mono',monospace]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-indigo-500 mb-2">
            <HiTerminal />
            <span className="text-xs font-bold uppercase tracking-widest">ls ./projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Build_<span className="text-indigo-500 text-2xl md:text-4xl">Artifacts</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="group relative bg-[#020617] p-8 hover:bg-indigo-500/[0.02] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Background ID number */}
              <span className="absolute -right-2 -top-4 text-8xl font-bold text-white/[0.02] pointer-events-none group-hover:text-indigo-500/5 transition-colors">
                {proj.id}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-indigo-500">
                    {getProjectIcon(proj.name)}
                  </div>
                  
                  {/* Status Tag */}
                  <div className={`text-[9px] px-2 py-0.5 border font-bold ${
                    proj.status === "Stable" 
                    ? "border-emerald-500/30 text-emerald-500" 
                    : "border-amber-500/30 text-amber-500"
                  }`}>
                    {proj.status.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500 mb-6 line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="relative z-10">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-slate-400">
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>

                {/* Conditional Link Button */}
                {proj.link ? (
                  <a 
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-white border-b border-indigo-500/0 hover:border-indigo-500 transition-all uppercase tracking-widest cursor-pointer"
                  >
                    View_Live_Demo <HiExternalLink className="text-indigo-500" />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest cursor-default">
                    Source_Locked <HiCode />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info Box */}
        <div className="mt-16 p-4 border-l-2 border-indigo-500 bg-indigo-500/5 flex gap-4 items-start max-w-2xl">
          <HiInformationCircle className="text-indigo-500 mt-1" size={18} />
          <p className="text-[11px] leading-relaxed text-slate-400">
            <span className="text-white font-bold uppercase">Note:</span> Artifacts listed as 'Stable' are fully deployed or containerized. External links open in a secure browser instance.
          </p>
        </div>
      </div>
    </section>
  );
}