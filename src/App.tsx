import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A051F] relative">x
      <div className="relative z-10">
        <Toaster position="top-right" />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;