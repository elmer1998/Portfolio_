import { HiCode, HiDatabase, HiLightningBolt, HiDeviceMobile } from "react-icons/hi";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <HiCode className="text-indigo-400" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)"]
    },
    {
      title: "Backend & Frameworks",
      icon: <HiLightningBolt className="text-yellow-400" />,
      skills: ["Python (Django)", "PHP (Laravel)", "Node.js", "REST APIs"]
    },
    {
      title: "Database & Storage",
      icon: <HiDatabase className="text-emerald-400" />,
      skills: ["MySQL", "PostgreSQL", "SQLite", "Firebase", "MongoDB"]
    },
    {
      title: "Emerging & Tools",
      icon: <HiDeviceMobile className="text-pink-400" />,
      skills: ["Git/GitHub", "Chart.js", "Socket.io", "FastAPI"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">A breakdown of my technical stack and development tools.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl p-2 bg-gray-900 rounded-lg">{cat.icon}</div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-900/80 text-gray-300 rounded-md text-sm border border-gray-700"
                  >
                    {skill}
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