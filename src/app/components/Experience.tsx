
import React from 'react';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
}

interface ServiceItem {
    title: string;
    description: string;
    icon: string;
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            role: "Senior Full-Stack Engineer",
            company: "TechGlobal Systems",
            period: "2022 - PRESENT",
            description: "Leading the development of cloud-native architectures and scaling high-traffic fintech applications using React and Node.js."
        },
        {
            role: "Software Architect",
            company: "InnovateSoft Solutions",
            period: "2020 - 2022",
            description: "Designed modular microservices and implemented robust CI/CD pipelines, reducing deployment times by 40%."
        },
        {
            role: "Lead Frontend Developer",
            company: "WebSolutions Studio",
            period: "2018 - 2020",
            description: "Managed a team of 5 developers to deliver immersive web experiences for enterprise-level clients globally."
        }
    ];

    const services: ServiceItem[] = [
        {
            title: "Frontend Development",
            description: "Crafting immersive, responsive, and high-performance user interfaces using React, Next.js, and modern CSS frameworks with a focus on UX.",
            icon: "fas fa-code"
        },
        {
            title: "Backend & API Development",
            description: "Building robust, scalable server-side architectures, RESTful APIs, and efficient database systems designed for high availability.",
            icon: "fas fa-server"
        },
        {
            title: "Project-Based Development",
            description: "End-to-end management and execution of custom software solutions, from conceptualization and design to final deployment.",
            icon: "fas fa-project-diagram"
        }
    ];

    return (
        <section id="service" className="py-24 px-[10vw] lg:px-[15vw] bg-transparent border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Experience Column */}
                    <div className="space-y-12">
                        <div>
                            <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-4 border-l-2 border-[#2ecc71] pl-4">Career</span>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black dark:text-white">
                                My <span className="text-black/30 dark:text-white/30">Experience</span>
                            </h2>
                        </div>

                        <div className="relative space-y-10 pl-8">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#2ecc71] via-black/10 dark:via-white/10 to-transparent"></div>

                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[36px] top-1.5 w-3 h-3 rounded-full bg-zinc-100 dark:bg-black border-2 border-[#2ecc71] group-hover:scale-125 transition-transform duration-300"></div>

                                    <div className="space-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                                            <h3 className="text-base font-bold text-black dark:text-white group-hover:text-[#2ecc71] transition-colors">
                                                {exp.role}
                                            </h3>
                                            <span className="text-[10px] font-mono text-[#2ecc71] tracking-widest whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div className="text-xs font-black uppercase tracking-widest text-black/40 dark:text-white/40">
                                            {exp.company}
                                        </div>
                                        <p className="text-sm text-black/60 dark:text-white/50 leading-relaxed font-light max-w-md">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-12">
                        <div>
                            <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-4 border-l-2 border-[#2ecc71] pl-4">Capabilities</span>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black dark:text-white">
                                Services <span className="text-black/30 dark:text-white/30">I Offer</span>
                            </h2>
                        </div>

                        <div className="relative space-y-10 pl-8">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#2ecc71] via-black/10 dark:via-white/10 to-transparent"></div>

                            {services.map((service, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[36px] top-1.5 w-3 h-3 rounded-full bg-zinc-100 dark:bg-black border-2 border-[#2ecc71] group-hover:scale-125 transition-transform duration-300"></div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <i className={`${service.icon} text-[#2ecc71] text-lg transition-colors`}></i>
                                            <h3 className="text-base font-bold text-black dark:text-white group-hover:text-[#2ecc71] transition-colors">{service.title}</h3>
                                        </div>
                                        <p className="text-sm text-black/60 dark:text-white/50 leading-relaxed font-light max-w-md">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
