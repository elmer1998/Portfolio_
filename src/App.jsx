import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Reveal } from "./components/Reveal"; // Import the wrapper

export default function App() {
  return (
    <div className="bg-gray-900 text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main>
        {/* Hero usually looks better with a simple fade-in on load */}
        <Reveal>
          <Hero />
        </Reveal>
        
        <div className="space-y-0"> 
          <Reveal><About /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><Skills /></Reveal>
          <Reveal><Contact /></Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}