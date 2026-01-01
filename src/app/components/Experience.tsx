"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
            role: "Technical Team Leader",
            company: "DDU ICT Club",
            period: "2025 - PRESENT",
            description: "Leading the technical team by coordinating projects, mentoring members, and organizing technology-focused activities to enhance students’ practical skills and collaboration."
        },
        {
            role: "Full-Stack Developer",
            company: "AFRONEX TECH HUB",
            period: "2024 - 2025",
            description: "Working as a full-stack developer, building and maintaining web applications using modern frontend and backend technologies, and contributing to scalable, real-world software solutions."
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            }
        }
    };

    return (
        <section id="service" className="py-24 px-[10vw] lg:px-[15vw] bg-transparent border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Experience Column */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-4 border-l-2 border-[#2ecc71] pl-4">Career</span>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black dark:text-white">
                                My <span className="text-black/30 dark:text-white/30">Experience</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="relative space-y-10 pl-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {/* Timeline Line */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 1 }}
                                className="absolute left-0 top-2 w-[1px] bg-gradient-to-b from-[#2ecc71] via-black/10 dark:via-white/10 to-transparent"
                            />

                            {experiences.map((exp, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="relative group">
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-4 border-l-2 border-[#2ecc71] pl-4">Capabilities</span>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black dark:text-white">
                                Services <span className="text-black/30 dark:text-white/30">I Offer</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="relative space-y-10 pl-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {/* Timeline Line */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                transition={{ duration: 1 }}
                                className="absolute left-0 top-2 w-[1px] bg-gradient-to-b from-[#2ecc71] via-black/10 dark:via-white/10 to-transparent"
                            />

                            {services.map((service, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="relative group">
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
