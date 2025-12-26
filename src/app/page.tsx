
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundDecorations from './components/BackgroundDecorations';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

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
        <Projects />

        {/* Experience Section Placeholder */}
        <section id="projects" className="py-40 px-[5vw] md:px-[10vw]">
          <div className="h-[1px] w-full bg-black/5 dark:bg-white/10 mb-20"></div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase opacity-80">Selected<br />Works</h2>
            <p className="text-black/40 dark:text-white/30 font-mono text-sm max-w-sm uppercase">
              A curated selection of software systems and platforms built with modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((i) => (
              <div key={i} className="group relative aspect-video bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-200 dark:from-zinc-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-2 block">Enterprise Solution</span>
                  <h3 className="text-2xl font-bold">Platform Architecture 0{i}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
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
