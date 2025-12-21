import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // New component

export default function App() {
  return (
    <div className="bg-gray-900 text-white selection:bg-indigo-500 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        <Hero />
        
        {/* We can use a common wrapper if you want consistent side padding */}
        <div className="space-y-0"> 
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}