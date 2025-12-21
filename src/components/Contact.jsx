import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-800 text-white px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Have a project in mind? Let's build something great together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-gray-900 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <HiMail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm italic">Email Me</p>
                <p className="text-lg font-medium">alicawayelmeralexis@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-gray-900 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm italic">Location</p>
                <p className="text-lg font-medium">Panabo City, Davao del Norte, PH</p>
              </div>
            </div>

            <div className="p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
              <h4 className="text-indigo-400 font-bold mb-2">Availability</h4>
              <p className="text-gray-300">
                I am currently open to freelance opportunities and full-time developer roles.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                  placeholder="How can I help you?"
                  rows="5"
                  className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}