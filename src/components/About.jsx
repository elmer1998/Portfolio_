import { HiDownload, HiLightningBolt } from "react-icons/hi";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 p-8 bg-gray-900 text-white"
    >
      {/* Profile Image with Decoration */}
      <div className="relative group lg:order-2">
        {/* Animated Glow behind the photo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-gray-800 rounded-full border-2 border-indigo-500/30 overflow-hidden shadow-2xl">
           <img 
            src="/Portfolio_/about_me.jpg" 
            alt="Elmer Alexis" 
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100" 
           />
        </div>
      </div>

      <div className="text-center lg:text-left max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">
          Beyond the <span className="text-indigo-400">Code</span>
        </h2>
        
        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
          <p>
            My journey into software development isn't traditional. Coming from a background in 
            <span className="text-white"> high-pressure customer service</span>, I learned early on that the best 
            technical solutions are useless if they don't solve human problems.
          </p>

          <p>
            I focus on <span className="text-white">Full Stack development</span>, bridging the gap between 
            complex database logic and clean, intuitive user interfaces. I enjoy the challenge of 
            learning new technologies and applying them to practical, real-world projects.
          </p>

          {/* Humble Learning Focus Box */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl mt-6 relative overflow-hidden group/box">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <h4 className="flex items-center text-indigo-400 font-semibold mb-2">
              <HiLightningBolt className="mr-2" /> Current Learning Focus
            </h4>
            <p className="text-sm leading-relaxed">
              I am currently diving deep into <span className="text-white font-medium">Retrieval-Augmented Generation (RAG)</span> 
              and local LLM implementations, exploring how AI can make information more accessible and useful.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a
            href="/Portfolio_/Elmer Alexis - Resume.pdf" 
            download="Elmer Alexis - Resume.pdf"
            className="group inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
          >
            <HiDownload className="mr-2 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}