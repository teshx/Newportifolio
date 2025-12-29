"use client";

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative py-24 px-10 overflow-hidden border-t border-black/5 dark:border-white/5">

            {/* TESHX Background Branding */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h1 className="text-[12vw] sm:text-[15vw] font-black uppercase tracking-tighter text-black/[0.1] dark:text-white/[0.03] leading-none whitespace-nowrap">
                    TESHX
                </h1>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-black/60 dark:text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium text-center md:text-left">
                    &copy; 2024 Teshager Habtie • Portfolio
                </div>

                <div className="flex gap-8 text-black/60 dark:text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
