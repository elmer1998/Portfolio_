import { useState, useEffect, useMemo } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ], []);

  // Optimized Scroll Spy using Intersection Observer
  useEffect(() => {
    const observers = [];

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(link.href.substring(1));
              }
            });
          },
          { threshold: 0.6 } // Adjust this to trigger sooner or later
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [links]);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md text-white z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Brand / Logo */}
        <h1 className="text-2xl font-extrabold tracking-tighter text-indigo-400 cursor-default">
          ELMER ALEXIS
        </h1>

        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-all duration-300 hover:text-indigo-400 ${
                  active === link.href.substring(1) ? "text-indigo-400" : "text-gray-300"
                }`}
              >
                {link.name}
                {/* Active Indicator Line */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transition-transform duration-300 ${
                  active === link.href.substring(1) ? "scale-x-100" : "scale-x-0"
                }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle Menu"
        >
          {open ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div className={`sm:hidden absolute w-full bg-gray-900 border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
        open ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
      }`}>
        <ul className="flex flex-col space-y-4 px-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block text-lg transition-colors ${
                  active === link.href.substring(1) ? "text-indigo-400 font-bold" : "text-gray-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}