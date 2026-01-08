import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { HiTerminal, HiChevronRight } from "react-icons/hi";

const NAVIGATION_LINKS = [
  { name: "home", href: "#home" },
  { name: "projects", href: "#projects" },
  { name: "about", href: "#about" },
  { name: "contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub size={18} />, href: "https://github.com/elmer1998", label: "github" },
  { icon: <FaLinkedin size={18} />, href: "#", label: "linkedin" },
  { icon: <FaEnvelope size={18} />, href: "mailto:alicawayelmeralexis@gmail.com", label: "email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-24 pb-12 px-6 font-['JetBrains_Mono',monospace] overflow-hidden">
      {/* Visual Indicator of EOF (End of File) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand/System Identity */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tighter text-white uppercase">
              EA_<span className="text-indigo-500">ALICAWAY</span>
              <span className="opacity-40">.exit()</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {"//"} Engineered with precision. Specializing in high-performance 
              architectures where code meets human-centric design.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Directory Column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-indigo-500 font-bold mb-8 uppercase tracking-widest text-[10px]">
              ./directory
            </h3>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs uppercase tracking-tighter"
                  >
                    <HiChevronRight className="text-indigo-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System Status Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end">
            <h3 className="text-indigo-500 font-bold mb-8 uppercase tracking-widest text-[10px]">
              system_info
            </h3>
            <div className="space-y-2 text-[11px] text-slate-500 text-center md:text-right">
              <p>ENVIRONMENT: <span className="text-slate-300">PRODUCTION</span></p>
              <p>LOCATION: <span className="text-slate-300">DAVAO_PH</span></p>
              <p>UPTIME: <span className="text-slate-300">99.9%</span></p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="mt-10 flex items-center gap-3 text-[10px] font-bold text-slate-400 hover:text-indigo-400 uppercase tracking-[0.3em] transition-all group"
            >
              sudo_reboot <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Status Bar Bottom */}
        <div className="border border-white/5 bg-white/[0.01] p-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-slate-600">
            <span className="flex items-center gap-2">
              <HiTerminal className="text-indigo-500" />
              USER: VISITOR_1
            </span>
            <span className="hidden md:inline opacity-20">|</span>
            <span>© {currentYear} EA_ALICAWAY</span>
          </div>
          
          <div className="flex items-center gap-6 text-[9px] uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">built_with:</span>
              <span className="text-indigo-400">REACT</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="text-indigo-400">TAILWIND</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-slate-600">latency:</span>
              <span className="text-emerald-500">14MS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}