"use client";

import React from 'react';

const Crosshair: React.FC<{ position: string }> = ({ position }) => (
    <div className={`absolute ${position} w-3 h-3 flex items-center justify-center pointer-events-none opacity-40 z-20`}>
        <div className="absolute w-[1px] h-2.5 dark:bg-white bg-black"></div>
        <div className="absolute w-2.5 h-[1px] dark:bg-white bg-black"></div>
    </div>
);

interface Tech {
    icon: React.ReactNode;
    label: string;
    color: string;


}

const TechIcon: React.FC<{ tech: Tech }> = ({ tech }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="group relative flex items-center justify-center transition-all duration-300 hover:scale-125 cursor-default hover:z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="text-4xl md:text-5xl transition-all duration-300 flex items-center justify-center"
                style={{ color: isHovered && tech.color !== '#current' ? tech.color : undefined }}
            >
                <div className={!isHovered ? "dark:text-white/20 text-black/20" : ""}>
                    {tech.icon}
                </div>
            </div>



            {/* Label Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-top-10">
                <div className="px-3 py-1.5 dark:bg-white/10 bg-black/10 backdrop-blur-md border dark:border-white/10 border-black/10 rounded-lg text-[10px] font-mono tracking-widest uppercase whitespace-nowrap dark:text-white text-black shadow-2xl">
                    {tech.label}
                </div>
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] dark:border-t-white/10 border-t-black/10 mx-auto"></div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const techStack: Tech[] = [
        { label: "HTML5", color: "#E34F26", icon: <i className="fab fa-html5"></i>, },
        { label: "CSS3", color: "#1572B6", icon: <i className="fab fa-css3-alt"></i>, },
        { label: "JavaScript", color: "#F7DF1E", icon: <i className="fab fa-js"></i>, },
        { label: "TypeScript", color: "#3178C6", icon: <i className="fab fa-js-square"></i>, },
        { label: "React", color: "#61DAFB", icon: <i className="fab fa-react"></i>, },
        { label: "Next.js", color: "#000000", icon: <svg viewBox="0 0 180 180" width="1em" height="1em" fill="currentColor"><mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black" /></mask><g mask="url(#mask0_408_134)"><circle cx="90" cy="90" r="90" fill="black" /><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" /><rect x="115" y="54" width="12" height="72" fill="white" /></g></svg>, },
        { label: "Prisma", color: "#2D3748", icon: <img src="/prisma.svg" alt="Prisma" className="w-[1.2em] h-[1.2em] object-contain invert dark:invert-0" />, },
        { label: "Better Auth", color: "#5E6AD2", icon: <img src="/better-auth.jpg" alt="Better Auth" className="w-[1em] h-[1em] object-contain invert dark:invert-0" />, },
        { label: "Tailwind CSS", color: "#06B6D4", icon: <i className="fab fa-css3"></i>, },
        { label: "Node.js", color: "#339933", icon: <i className="fab fa-node-js"></i>, },
        { label: "Python", color: "#3776AB", icon: <i className="fab fa-python"></i>, },
        { label: "C++", color: "#00599C", icon: <span className="font-bold text-sm">C++</span>, },
        { label: "PHP", color: "#777BB4", icon: <i className="fab fa-php"></i>, },
        { label: "Laravel", color: "#FF2D20", icon: <i className="fab fa-laravel"></i>, },
        { label: "MySQL", color: "#4479A1", icon: <i className="fas fa-database"></i>, },
        { label: "MongoDB", color: "#47A248", icon: <i className="fas fa-leaf"></i>, },
        { label: "PostgreSQL", color: "#336791", icon: <i className="fas fa-database"></i>, },
        { label: "Express", color: "#current", icon: <span className="font-bold text-lg md:text-xl leading-none">EX</span>, },
        { label: "Git", color: "#F05032", icon: <i className="fab fa-git-alt"></i>, },
        { label: "AWS", color: "#FF9900", icon: <i className="fab fa-aws"></i>, },
        { label: "Docker", color: "#2496ED", icon: <i className="fab fa-docker"></i>, },
        { label: "Figma", color: "#F24E1E", icon: <i className="fab fa-figma"></i>, },
    ];

    return (
        <section id="skill" className="py-32 px-[5vw] md:px-[10vw] flex flex-col items-center">
            {/* Title Header */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 dark:text-white text-zinc-900">Technical Stack</h2>
                <div className="w-20 h-1.5 dark:bg-white/20 bg-black/20 mx-auto"></div>
            </div>

            {/* Main Square Container */}
            <div className="relative border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] backdrop-blur-sm p-8 md:p-12 flex flex-col items-center rounded-3xl max-w-7xl w-full">
                {/* Corner Crosshairs */}
                <Crosshair position="-top-1.5 -left-1.5" />
                <Crosshair position="-top-1.5 -right-1.5" />
                <Crosshair position="-bottom-1.5 -left-1.5" />
                <Crosshair position="-bottom-1.5 -right-1.5" />

                {/* Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4 md:gap-6">
                    {techStack.map((tech, idx) => (
                        <TechIcon key={idx} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
