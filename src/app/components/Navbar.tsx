"use client";
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Initial sync with the document class and localStorage
        const savedTheme = localStorage.getItem('theme');
        const isCurrentlyDark = savedTheme === 'dark' || (!savedTheme && document.documentElement.classList.contains('dark'));

        setIsDark(isCurrentlyDark);
        if (isCurrentlyDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const newMode = !isDark;

        if (newMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        setIsDark(newMode);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 transition-colors duration-300">
            {/* Logo on the Left */}
            <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-black dark:bg-white flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <span className="text-white dark:text-black font-black text-xl leading-none">T</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-black tracking-tighter leading-none dark:text-white text-zinc-900">TESHAGER</span>
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em] dark:text-white text-zinc-500">Habtie</span>
                </div>
            </div>

            {/* Main Pill Nav in Middle */}
            <nav className="hidden md:flex px-8 py-3 bg-zinc-100/40 dark:bg-zinc-900/60 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-full items-center gap-10 shadow-sm dark:shadow-none">
                <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">Home</a>
                <a href="#skill" className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">Skill</a>
                <a href="#aboutme" className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">AboutMe</a>
                <a href="#service" className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">Service</a>
                <a href="#project" className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">Project</a>
                <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">Contact</a>
            </nav>

            {/* Theme Switcher on the Right */}
            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-12 h-12 flex items-center justify-center bg-zinc-200/50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full hover:bg-zinc-300/50 dark:hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
                <div className={`transition-all duration-500 ease-in-out flex flex-col items-center gap-8 ${isDark ? '-translate-y-[26px]' : 'translate-y-[26px]'}`}>
                    {/* Moon Icon (Visible when in Light Mode) */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>

                    {/* Sun Icon (Visible when in Dark Mode) */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                </div>
            </button>
        </header>
    );
};

export default Navbar;
