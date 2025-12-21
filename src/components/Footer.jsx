import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/5 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">
              ELMER ALEXIS<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-gray-400 text-center md:text-left max-w-xs">
              Full Stack Developer specializing in building high-performance 
              web applications and enterprise solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="flex flex-col items-center gap-2 text-gray-400">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/elmer1998" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-indigo-500 transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/elmer-alexis-alicaway-04a300189" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-indigo-500 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:alicawayelmeralexis@outlook.com" 
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-indigo-500 transition-all"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {currentYear} Elmer Alexis. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-indigo-400 font-medium">React</span>
            <span>&</span>
            <span className="text-indigo-400 font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}