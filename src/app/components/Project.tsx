"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    githubUrl: string;
    tags: string[];
}

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group flex flex-col h-full overflow-hidden rounded-sm bg-white dark:bg-[#161616] border border-black/5 dark:border-white/5 transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none"
        >
            {/* Top Image */}
            <div className="relative aspect-video overflow-hidden border-b border-black/5 dark:border-white/5">
                <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4 uppercase tracking-tighter">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black/60 dark:text-white/50 leading-relaxed font-light mb-6">
                    {project.description}
                </p>

                {/* Tags Section (Moved below description) */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1.5 text-xs font-medium text-black/50 dark:text-white/40 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded uppercase tracking-widest transition-colors group-hover:text-black/80 dark:group-hover:text-white/70"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex items-center gap-3">
                    <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-black dark:bg-[#d1d5db] hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest rounded-sm transition-all shadow-lg"
                    >
                        Site <i className="fas fa-external-link-alt ml-2 text-[10px]"></i>
                    </motion.a>
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all"
                    >
                        Github <i className="fab fa-github ml-2 text-sm"></i>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const projects: ProjectItem[] = [
        {
            id: 'amazon-clone',
            title: 'Amazon-clone',
            description: 'Full-stack e-commerce platform with user authentication, product catalog, and shopping cart functionality.',
            imageUrl: '/Amazone-clone-1Z4w36d5.png',
            liveUrl: 'https://teshx-funny-toffee-d3ea20.netlify.app/',
            githubUrl: 'https://github.com/teshx/Amazon-clone/',
            tags: ['React', 'Express', 'Node', 'Firebase']
        },
        {
            id: 'netflix-clone',
            title: 'Netflix-clone',
            description: 'Streaming platform interface with movie browsing, search functionality, and responsive design.',
            imageUrl: '/netflix-clone-B5KCDRi6.jpg',
            liveUrl: 'https://teshx-nstirring-fudge-138dc3.netlify.app/',
            githubUrl: 'https://github.com/teshx/Netflix-Clone',
            tags: ['React']
        },
        {
            id: 'iphone-clone-1',
            title: 'iPhone-clone',
            description: 'This is a project made to learn the latest languages by building an app.',
            imageUrl: '/iphone-bootstrap-aXG85nJe.png',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
        },
        {
            id: 'iphone-clone-2',
            title: 'iPhone-clone',
            description: 'Modern iPhone landing page clone built with React and custom CSS styling.',
            imageUrl: '/iphone-react-CbF-vJ1U.png',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['React', 'CSS']
        },
        {
            id: 'auth-system',
            title: 'Auth',
            description: 'Complete authentication system with user registration, login, and session management.',
            imageUrl: '/Auth-coipgMli.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/teshx/Auth',
            tags: ['React', 'Express', 'Node', 'MongoDB']
        },
        {
            id: 'library-management',
            title: 'Library Management System',
            description: 'Full-featured library management system with book cataloging, member management, and borrowing tracking.',
            imageUrl: '/lms-DM6EQrTJ.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/teshx/Learning-PHP/tree/main/New-online-liberary-management-system',
            tags: ['HTML', 'MySQL', 'PHP', 'JavaScript']
        }
    ];

    return (
        <section id="project" className="py-24 px-[10vw] lg:px-[15vw] bg-transparent border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-black dark:text-white/90">
                        Selected Works
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-black/30 dark:text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                        <i className="fas fa-cube text-[#2ecc71]"></i>
                        {/* <span>Engineering solutions for complex <span className="text-black/60 dark:text-white/60">Digital Ecosystems</span></span> */}
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </motion.div>

                {/* Archive Footer */}
                <div className="mt-24 flex justify-center">
                    <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
