import { HiArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full"></div>
      
      <div className="z-10 max-w-3xl">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 tracking-tight">
          Hi, I'm <span className="text-indigo-400">Elmer Alexis</span>
        </h1>
        
        <p className="text-lg sm:text-2xl mb-8 text-gray-400 font-medium">
          Full Stack Developer specializing in <span className="text-white">Django</span> & <span className="text-white">React</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            View My Work
            <HiArrowNarrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}