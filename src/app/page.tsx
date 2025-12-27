
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundDecorations from './components/BackgroundDecorations';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import Experience from './components/Experience';
import Contacts from './components/Contact';

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
        <Projects />
        <Contacts />

      </main>

      <footer className="relative z-10 py-16 px-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/50 dark:bg-transparent transition-colors">
        <div className="text-black/20 dark:text-white/20 text-[10px] uppercase tracking-[0.4em]">
          &copy; 2024 Teshager Habtie • Portfolio
        </div>
        <div className="flex gap-8 text-black/20 dark:text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookies</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
