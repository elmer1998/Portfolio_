import { HiArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 blur-[120px] rounded-full"></div>
      
      <div className="z-10 max-w-3xl">
        {/* Status indicator: Shows you are a continuous learner */}
        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-gray-400 uppercase bg-white/5 border border-white/10 rounded-full">
          Aspiring Software Engineer & Constant Learner
        </span>

        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
          Hi, I'm <span className="text-indigo-400">Elmer Alexis</span>
        </h1>
        
        {/* Humble Subtitle: Focuses on what you DO rather than what you ARE */}
        <p className="text-lg sm:text-xl mb-10 text-gray-400 leading-relaxed max-w-2xl mx-auto">
          I'm a developer who loves building practical things. 
          Currently focusing on <span className="text-white">Full Stack Web Development</span> while 
          exploring the world of <span className="text-white">AI and Language Models.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            See What I've Built
            <HiArrowNarrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}