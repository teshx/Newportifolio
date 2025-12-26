
import React from 'react';

const ExpertiseLabel: React.FC<{ label: string }> = ({ label }) => {
    return (
        <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="h-[1px] w-8 bg-[#2ecc71]/30 group-hover:w-16 group-hover:bg-[#2ecc71] transition-all duration-500 mb-2"></div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors text-center">
                {label}
            </span>
        </div>
    );
};

const AboutMe: React.FC = () => {
    return (
        <section id="about-me" className="py-24 px-[5vw] md:px-[10vw] relative bg-transparent overflow-hidden border-t border-black/5 dark:border-white/5">
            {/* Local Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2ecc71]/5 via-transparent to-blue-500/5 blur-[120px] opacity-50"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 items-center mb-24">

                    {/* Left Side: Content */}
                    <div className="flex flex-col gap-6 text-left order-2 md:order-1">
                        <div className="space-y-4">
                            <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-2 border-l-2 border-[#2ecc71] pl-4">About Me</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-black dark:text-white">
                                Why Hire Me <br />
                                for Your <br />
                                <span className="text-black/30 dark:text-white/40">Next Project?</span>
                            </h2>
                        </div>

                        <p className="text-sm md:text-base text-black/60 dark:text-white/50 leading-relaxed font-light max-w-xl">
                            I specialize in developing high-performance full-stack applications that help companies scale their digital footprint. By combining modern engineering practices with an eye for detailed product design, I bridge the gap between complex technical requirements and intuitive user experiences.
                        </p>

                        <div className="pt-6">
                            <button className="group relative px-10 py-4 bg-[#2ecc71] overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-lg shadow-[#2ecc71]/20 rounded-sm">
                                <span className="relative z-10 text-black font-black uppercase tracking-widest text-xs">
                                    Learn More
                                </span>
                                <i className="fas fa-arrow-right absolute right-4 top-1/2 -translate-y-1/2 text-black opacity-0 group-hover:opacity-100 transition-all"></i>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Profile Photo */}
                    <div className="relative order-1 md:order-2 group flex justify-center items-center py-10">

                        {/* Image Container - Stripped of box styling */}
                        <div className="relative w-full max-w-[300px] aspect-[4/5] transition-all duration-700 ease-in-out group flex items-center justify-center">

                            {/* Profile Image */}
                            <img
                                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80"
                                alt="Profile Photo"
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 rounded-3xl "
                            />

                            {/* The "Fullstack Developer" Badge - Kept but simplified and floating */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-900/90 dark:bg-white/90 backdrop-blur-xl border border-white/10 dark:border-black/10 px-4 py-2 rounded-lg flex items-center justify-center gap-3 transition-transform duration-700 group-hover:scale-105 shadow-xl">
                                <div className="flex items-center gap-1.5 text-orange-500">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </div>
                                <span className="text-white dark:text-black font-black tracking-tight text-[10px] whitespace-nowrap uppercase">Fullstack Developer</span>
                            </div>
                        </div>

                        {/* Background Floating Rings - Slightly smaller, decorative only */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.03] dark:opacity-[0.1] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 border border-[#2ecc71] rounded-full"
                                    style={{ transform: `scale(${1 + i * 0.3})` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-16 border-t border-black/5 dark:border-white/10 mt-12">
                    <ExpertiseLabel label="Full-Stack Dev" />
                    <ExpertiseLabel label="UI & UX Design" />
                    <ExpertiseLabel label="System Arch" />
                    <ExpertiseLabel label="Cloud Solutions" />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
