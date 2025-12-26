
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
        <section id="careers" className="py-24 px-[10vw] lg:px-[15vw] bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Experience Column */}
                    <div className="space-y-12">
                        <div>
                            <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-4 border-l-2 border-[#2ecc71] pl-4">Career</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
                                My <span className="text-white/30">Experience</span>
                            </h2>
                        </div>

                        <div className="relative space-y-10 pl-8">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#2ecc71] via-white/10 to-transparent"></div>

                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[36px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-[#2ecc71] group-hover:scale-125 transition-transform duration-300"></div>

                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono text-[#2ecc71] tracking-widest">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#2ecc71] transition-colors">{exp.role}</h3>
                                        <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">{exp.company}</div>
                                        <p className="text-sm text-white/50 leading-relaxed font-light max-w-md">
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
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
                                Services <span className="text-white/30">I Offer</span>
                            </h2>
                        </div>

                        <div className="grid gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="group p-8 bg-[#111111] border border-white/5 rounded-xl hover:border-[#2ecc71]/30 hover:bg-white/[0.02] transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-[#2ecc71] group-hover:bg-[#2ecc71] group-hover:text-black transition-all duration-500">
                                            <i className={`${service.icon} text-xl`}></i>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:translate-x-1 transition-transform">{service.title}</h3>
                                            <p className="text-sm text-white/40 leading-relaxed font-light">
                                                {service.description}
                                            </p>
                                        </div>
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
