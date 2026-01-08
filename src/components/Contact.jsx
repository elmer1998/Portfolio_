import { HiMail, HiLocationMarker, HiChatAlt2, HiTerminal, HiArrowRight, HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#020617] text-slate-300 px-6 font-['JetBrains_Mono',monospace]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header: Command Line Style */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-indigo-500 mb-2">
            <HiTerminal />
            <span className="text-xs font-bold uppercase tracking-widest">ssh connection_request</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter lowercase">
            ping -a <span className="text-indigo-500">ea_alicaway</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-px bg-white/5 border border-white/5 shadow-2xl">
          
          {/* Metadata Side (2 Columns) */}
          <div className="lg:col-span-2 bg-[#020617] p-8 md:p-12 border-r border-white/5">
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Status: 200 OK
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Establishing_Contact...
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  {"// Always open for RAG research, Full Stack roles, and open-source collaboration."}
                </p>
              </div>

              <div className="space-y-8">
                {/* Email as an Object Property */}
                <div className="group">
                  <p className="text-indigo-500 text-[10px] uppercase font-bold mb-2">.email_address</p>
                  <a href="mailto:alicawayelmeralexis@gmail.com" className="text-sm md:text-base font-medium text-slate-200 hover:text-white transition-colors block break-all">
                    "alicawayelmeralexis@gmail.com"
                  </a>
                </div>

                {/* Location as an Object Property */}
                <div>
                  <p className="text-indigo-500 text-[10px] uppercase font-bold mb-2">.physical_origin</p>
                  <p className="text-sm md:text-base text-slate-200">
                    "Davao_Region, PH"
                  </p>
                </div>

                {/* Socials as an Array */}
                <div>
                  <p className="text-indigo-500 text-[10px] uppercase font-bold mb-4">.social_endpoints</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all">
                      <FaGithub size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all">
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side: Styled as a Request Body (3 Columns) */}
          <div className="lg:col-span-3 bg-[#050816] p-8 md:p-12">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-indigo-500 text-white text-[10px] font-bold rounded-sm">POST</div>
                <span className="text-xs text-slate-500 tracking-tight">https://api.alicaway.dev/v1/message</span>
              </div>
              <HiCode className="text-slate-700 text-xl" />
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-600">{"<input_name>"}</label>
                  <input
                    type="text"
                    placeholder="name.init()"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-600">{"<input_email>"}</label>
                  <input
                    type="email"
                    placeholder="user@domain.com"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-600">{"<payload_message>"}</label>
                <textarea
                  placeholder="Type your message here..."
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-fit flex items-center gap-3 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95"
              >
                Execute_Send()
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-[10px] text-slate-700 italic">
              {"// Note: All messages are encrypted via TLS 1.3 before transmission."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}