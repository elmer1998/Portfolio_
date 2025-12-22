import { HiExternalLink, HiCode, HiCheckCircle } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      name: "Personal AI RAG Assistant",
      description: "A local, privacy-focused RAG engine built with FastAPI and Qwen 2.5. Implements a complete vector pipeline using ChromaDB for document indexing and real-time streaming Q&A over private text data.",
      tags: ["FastAPI", "LangChain", "Hugging Face", "ChromaDB"],
      link: "#",
      status: "Completed"
    },
    {
      name: "Simple Task Management System",
      description: "A full-stack React/Django productivity engine featuring JWT authentication, real-time state synchronization, and a fixed-viewport glassmorphism UI with optimized container scrolling.",
      tags: ["React", "Django REST", "JWT", "Tailwind v4"],
      link: "#", 
      status: "Completed"
    },
    {
      name: "Manufacturing ERP System",
      description: "A custom enterprise solution built with Django and MySQL. Automated production logs and improved data entry efficiency by 40%.",
      tags: ["Django", "MySQL", "Bootstrap"],
      link: "#",
      status: "In Progress"
    },
    {
      name: "Responsive Blog & CMS",
      description: "A modern headless CMS featuring Markdown support and SEO optimization. Focuses on content management and real-time previews.",
      tags: ["React", "Tailwind", "Django API"],
      link: "#",
      status: "In Progress"
    },
    {
      name: "Real-time Chat Application",
      description: "A secure, instant messaging platform utilizing WebSockets for real-time data sync across multiple clients.",
      tags: ["Node.js", "Socket.io", "React"],
      link: "#",
      status: "In Progress"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Work</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            A collection of full-stack applications solving real-world business and technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="group bg-gray-900/50 border border-gray-700 p-10 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[480px]"
            >
              {/* Status Badge */}
              {proj.status && (
                <div className={`absolute top-6 right-8 flex items-center gap-1.5 px-3 py-1 ${
                  proj.status === "Completed" 
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                  : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                } text-[11px] font-bold uppercase tracking-widest rounded-full border`}>
                  <HiCheckCircle size={14} /> {proj.status}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <HiCode size={28} />
                  </div>
                  <a href={proj.link} className="text-gray-500 hover:text-white transition-colors p-2">
                    <HiExternalLink size={26} />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700 group-hover:border-gray-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}