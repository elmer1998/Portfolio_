import { HiExternalLink, HiCode } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      name: "Manufacturing ERP System",
      description: "A custom enterprise solution built with Django and MySQL. Automated production logs and improved data entry efficiency by 40%.",
      tags: ["Django", "MySQL", "Bootstrap"],
      link: "#", // Add link or internal detail page
    },
    {
      name: "Responsive Blog & CMS",
      description: "A modern headless CMS featuring Markdown support and SEO optimization. Focuses on content management and real-time previews.",
      tags: ["React", "Tailwind", "Django API"],
      link: "#",
    },
    {
      name: "Real-time Chat Application",
      description: "A secure, instant messaging platform utilizing WebSockets for real-time data sync across multiple clients.",
      tags: ["Node.js", "Socket.io", "React"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            A collection of full-stack applications solving real-world business and technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="group bg-gray-900/50 border border-gray-700 p-8 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <HiCode size={24} />
                  </div>
                  <a href={proj.link} className="text-gray-500 hover:text-white transition-colors">
                    <HiExternalLink size={24} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700">
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