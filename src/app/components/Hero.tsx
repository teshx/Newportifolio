
import React from 'react';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
            <div className="max-w-5xl w-full text-center">
                {/* Top Tag */}
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-400/10 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest font-semibold dark:text-white/60 text-zinc-500">Available for New Projects</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6">
                        <span className="dark:text-white text-zinc-900">HI, I'M</span>

                        {/* The small picture in the middle */}
                        <div className="relative group inline-block">
                            <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 float">
                                <img
                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop"
                                    alt="Teshager Habtie"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                        <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-white dark:via-white/80 dark:to-purple-400 bg-clip-text text-transparent">
                            TESHAGER
                        </span>
                    </div>
                    <div className="mt-2 dark:text-white text-zinc-900">HABTIE</div>
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl mx-auto text-lg md:text-2xl font-light dark:text-white/50 text-zinc-500 leading-relaxed mb-10 tracking-tight">
                    Experienced <span className="dark:text-white text-zinc-800 font-medium">Full-Stack Developer</span> |
                    <span className="dark:text-white text-zinc-800 font-medium"> Software Engineer</span>
                </p>

                {/* CTA Buttons */}
                {/* <div className="flex flex-wrap items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Explore My Work
                    </button>
                    <button className="px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                        Download CV
                    </button>
                </div> */}
            </div>

            {/* Scroll indicator */}
            {/* Social Links Row */}
            <div className="mb-10">
                <SocialLinks />
            </div>

            {/* Single Contact Button */}
            <button className="relative group px-10 py-4 bg-transparent border border-black/10 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 active:scale-95">
                <div className="absolute inset-0 bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 font-black uppercase tracking-widest text-sm text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
                    Contact Me
                </span>
            </button>
        </section>
    );
};

export default Hero;
