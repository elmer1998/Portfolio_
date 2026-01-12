import { useState, useEffect, useMemo } from "react";
import { HiMenuAlt3, HiX, HiCode } from "react-icons/hi";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const links = useMemo(() => [
    { name: "Home", href: "#home", icon: "01" },
    { name: "About", href: "#about", icon: "02" },
    { name: "Projects", href: "#projects", icon: "03" },
    { name: "Skills", href: "#skills", icon: "04" },
    { name: "Contact", href: "#contact", icon: "05" },
  ], []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActive(link.href.substring(1));
            });
          },
          { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [links]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-12 transition-all duration-500 font-['JetBrains_Mono',monospace]`}>
      
      {/* SCROLL PROGRESS BAR */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div 
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 mt-4 px-6 py-3 rounded-xl border
        ${scrolled 
          ? "bg-[#020617]/80 backdrop-blur-xl border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent"
        }`}
      >
        {/* LOGO SECTION */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
            <HiCode className="text-indigo-500 text-xl group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xs md:text-sm font-black tracking-widest text-white leading-tight">
              {scrolled ? "LUKZ" : "EA_ALICAWAY"}
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[7px] text-slate-500 font-bold uppercase tracking-[0.2em]">Live_Session</span>
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const isActive = active === link.href.substring(1);
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`relative z-10 flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300
                  ${isActive ? "text-white" : "text-slate-500 hover:text-slate-200"}`}
                >
                  <span className={`text-[9px] ${isActive ? "text-indigo-400" : "text-slate-700"}`}>
                    /{link.icon}
                  </span>
                  {link.name}

                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg z-[-1]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      <motion.div 
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-indigo-500/10 blur-md"
                      />
                    </motion.div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* RIGHT SIDE: STATUS */}
        <div className="hidden lg:flex items-center gap-6 pl-6 border-l border-white/10">
            <div className="flex flex-col items-end">
              <span className="text-[7px] text-slate-500 uppercase font-black">Kernel_Status</span>
              <span className="text-[9px] text-indigo-400 font-bold tracking-tighter italic">V2.4.0_Stable</span>
            </div>
            <button className="h-8 px-3 rounded border border-white/10 bg-white/5 flex items-center justify-center gap-2 group hover:border-indigo-500/50 transition-colors">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
               <span className="text-[9px] text-white font-black uppercase tracking-widest">Active</span>
            </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-[#0b0e14] text-white"
        >
          <AnimatePresence mode="wait">
            {open ? <HiX key="x" size={18} /> : <HiMenuAlt3 key="menu" size={18} />}
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-screen w-[75%] bg-[#020617] border-l border-white/10 p-8 shadow-2xl z-[101]"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-12">
                   <span className="text-[10px] text-indigo-500 font-black tracking-widest uppercase">System_Menu</span>
                   <HiX onClick={() => setOpen(false)} className="text-slate-500 cursor-pointer" />
                </div>

                <nav className="flex flex-col gap-6">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] text-indigo-500/50 font-black tracking-widest uppercase mb-1">/{link.icon}</span>
                        <span className={`text-2xl font-black tracking-tighter uppercase transition-colors ${active === link.href.substring(1) ? "text-white" : "text-slate-600"}`}>
                          {link.name}
                        </span>
                      </div>
                      {active === link.href.substring(1) && (
                        <div className="w-8 h-[2px] bg-indigo-500"></div>
                      )}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto pt-8 border-t border-white/5">
                   <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Signed_In_As</p>
                   <p className="text-sm text-white font-black">LUKZ_ALICAWAY</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}