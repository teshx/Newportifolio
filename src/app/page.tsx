
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundDecorations from './components/BackgroundDecorations';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Experience from './components/Experience';
import Contacts from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-100 dark:bg-black transition-colors duration-500 selection:bg-purple-500/30 text-zinc-800 dark:text-white">
      {/* Global Background Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-[0.4] dark:opacity-[0.2]" />

      {/* Specific decorative elements from the reference image */}
      <BackgroundDecorations />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Skills />
        {/* About Me Section */}
        <AboutMe />
        <Experience />
        <Project />
        <Contacts />

      </main>

      <Footer />
    </div>
  );
};

export default App;
