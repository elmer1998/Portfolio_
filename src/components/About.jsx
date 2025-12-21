import { HiDownload } from "react-icons/hi";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col sm:flex-row justify-center items-center gap-12 p-8 bg-gray-900 text-white"
    >
      {/* Profile Image with Decoration */}
      <div className="relative group sm:order-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative w-56 h-56 bg-gray-800 rounded-full border-2 border-indigo-500 overflow-hidden shadow-2xl">
           {/* Replace with your image <img src="/your-photo.jpg" alt="Elmer" className="object-cover w-full h-full" /> */}
        </div>
      </div>

      <div className="text-center sm:text-left max-w-xl">
        <h2 className="text-4xl font-bold mb-6">
          Beyond the <span className="text-indigo-400">Code</span>
        </h2>
        
        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
          I am a **Full Stack Developer** who enjoys turning complex business problems into simple, efficient digital tools. 
          My background in high-pressure customer service has shaped me into a developer who prioritizes **clear communication** and **user-centric solutions**.
        </p>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Whether it's architecting an **ERP system for manufacturing** or building sleek frontends with **React**, 
          I focus on writing clean, maintainable code that delivers real-world impact.
        </p>

        <a
          href="/Portfolio_/Elmer Alexis - Resume.pdf" 
          download="Elmer Alexis - Resume.pdf"
          className="group inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
        >
          <HiDownload className="mr-2 group-hover:bounce" />
          Download Resume
        </a>
      </div>
    </section>
  );
}