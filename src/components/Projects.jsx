import { HiCode, HiCheckCircle, HiInformationCircle } from "react-icons/hi"; // Added Information icon

export default function Projects() {
  const projects = [
    {
      name: "Personal AI RAG Assistant",
      description: "A local, privacy-focused RAG engine built with FastAPI and Qwen 2.5. Implements a complete vector pipeline using ChromaDB for document indexing and real-time streaming Q&A over private text data.",
      tags: ["FastAPI", "LangChain", "Hugging Face", "ChromaDB"],
      status: "Completed"
    },
    {
      name: "Simple Task Management System",
      description: "A full-stack React/Django productivity engine featuring JWT authentication, real-time state synchronization, and a fixed-viewport glassmorphism UI with optimized container scrolling.",
      tags: ["React", "Django REST", "JWT", "Tailwind v4"],
      status: "Completed"
    },
    {
      name: "High-Performance HTTP Server",
      description: "A custom C++ systems project engineered from scratch to manage raw socket connections. Features a multi-threaded architecture capable of handling 100+ concurrent TCP handshakes with zero packet loss.",
      tags: ["C++", "WinSock2", "Multi-threading", "Networking"],
      status: "Completed"
    },
    {
      name: "Manufacturing ERP System",
      description: "A custom enterprise solution built with Django and MySQL. Automated production logs and improved data entry efficiency by 40%.",
      tags: ["Django", "MySQL", "Bootstrap"],
      status: "In Progress"
    },
    {
      name: "Responsive Blog & CMS",
      description: "A modern headless CMS featuring Markdown support and SEO optimization. Focuses on content management and real-time previews.",
      tags: ["React", "Tailwind", "Django API"],
      status: "In Progress"
    },
    {
      name: "Real-time Chat Application",
      description: "A secure, instant messaging platform utilizing WebSockets for real-time data sync across multiple clients.",
      tags: ["Node.js", "Socket.io", "React"],
      status: "In Progress"
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-800 text-white px-4 sm:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Work</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto text-sm sm:text-base">
            A collection of full-stack applications solving real-world business and technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="group bg-gray-900/50 border border-gray-700 p-8 sm:p-10 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[440px]"
            >
              {/* Dynamic Status Badge */}
              {proj.status && (
                <div className={`absolute top-6 right-8 flex items-center gap-1.5 px-3 py-1 ${
                  proj.status === "Completed" 
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                  : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                } text-[10px] font-bold uppercase tracking-widest rounded-full border`}>
                  <HiCheckCircle size={14} /> {proj.status}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <HiCode size={28} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                  {proj.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700 group-hover:border-gray-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- NEW REMINDER SECTION --- */}
        <div className="mt-16 flex items-center justify-center gap-3 p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl max-w-2xl mx-auto">
          <HiInformationCircle className="text-indigo-400 shrink-0" size={20} />
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Projects marked as <span className="text-emerald-400 font-semibold">Completed</span> are fully functional and ready for live demonstration on my local machine upon request.
          </p>
        </div>
        {/* ---------------------------- */}
      </div>
    </section>
  );
}