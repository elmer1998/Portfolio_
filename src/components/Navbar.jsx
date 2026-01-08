import { useState, useEffect, useMemo } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // useMemo prevents unnecessary re-renders of the observer logic
  const links = useMemo(() => [
    { name: "Home", href: "#home", icon: "01" },
    { name: "About", href: "#about", icon: "02" },
    { name: "Projects", href: "#projects", icon: "03" },
    { name: "Skills", href: "#skills", icon: "04" },
    { name: "Contact", href: "#contact", icon: "05" },
  ], []);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic to highlight the active section as you scroll
  useEffect(() => {
    const observers = [];
    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Using a threshold and rootMargin to trigger the change 
              // when the section is roughly in the middle of the viewport
              if (entry.isIntersecting) {
                setActive(link.href.substring(1));
              }
            });
          },
          { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [links]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] px-6 transition-all duration-500 ease-in-out font-['JetBrains_Mono',monospace] 
      ${scrolled ? "py-4" : "py-8"}`}
    >
      <div 
        className={`max-w-6xl mx-auto flex justify-between items-center px-6 py-3 rounded-md transition-all duration-500 border 
        ${scrolled 
          ? "bg-[#020617]/90 backdrop-blur-md border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
        }`}
      >
        {/* LOGO AREA */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="flex items-center text-indigo-500 font-bold text-sm">
            <span>[</span>
            <div className="w-2 h-2 bg-indigo-500 rounded-full mx-1 group-hover:animate-ping"></div>
            <span>]</span>
          </div>
          <h1 className="text-[11px] md:text-[13px] font-bold tracking-tighter text-white uppercase">
            EA_<span className="text-indigo-400">ALICAWAY</span>
            <span className="opacity-40">.init()</span>
          </h1>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const isActive = active === link.href.substring(1);
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`group flex items-center gap-2 px-4 py-1 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    isActive ? "text-white font-bold" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <span className={`text-[9px] ${isActive ? "text-indigo-500" : "text-slate-700"}`}>
                    {link.icon}
                  </span>
                  {link.name}
                  
                  {/* Underline for Active State */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-4 right-4 h-[2px] bg-indigo-500 shadow-[0_0_12px_#6366f1]"></div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors border border-white/10 rounded-md bg-white/5"
        >
          {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`md:hidden absolute top-24 left-6 right-6 bg-[#020617] border border-white/10 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
        open ? "max-h-[500px] opacity-100 shadow-3xl py-8" : "max-h-0 opacity-0 pointer-events-none"
      }`}>
        <ul className="flex flex-col px-8 gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors ${
                  active === link.href.substring(1) ? "text-indigo-400" : "text-slate-600"
                }`}
              >
                <span className="text-[9px] opacity-30">{link.icon}</span>
                {link.name}
                {active === link.href.substring(1) && <span className="animate-pulse">_</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}