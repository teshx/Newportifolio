"use client";

import React from 'react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
            <motion.div
                className="max-w-5xl w-full text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Top Tag */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-400/10 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest font-semibold dark:text-white/60 text-zinc-500">Available for New Projects</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6"
                >
                    <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6">
                        <span className="dark:text-white text-zinc-900">HI, I'M</span>

                        {/* The small picture in the middle */}
                        <div className="relative group inline-block">
                            <motion.div
                                className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <div className="relative w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10">
                                <motion.img
                                    src="/TESHX.png"
                                    alt="Teshager Habtie"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>

                        <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-white dark:via-white/80 dark:to-purple-400 bg-clip-text text-transparent">
                            TESHAGER
                        </span>
                    </div>
                    <div className="mt-2 dark:text-white text-zinc-900">HABTIE</div>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-lg md:text-2xl font-light dark:text-white/50 text-zinc-500 leading-relaxed mb-10 tracking-tight"
                >
                    Experienced <span className="dark:text-white text-zinc-800 font-medium">Full-Stack Developer</span> |
                    <span className="dark:text-white text-zinc-800 font-medium"> Software Engineer</span>
                </motion.p>

                {/* Social Links Row */}
                <motion.div variants={itemVariants} className="mb-10">
                    <SocialLinks />
                </motion.div>

                {/* Single Contact Button */}
                <motion.div variants={itemVariants}>
                    <a href="#contact" className="relative group px-10 py-4 bg-transparent border border-black/10 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 active:scale-95 inline-block">
                        <div className="absolute inset-0 bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 font-black uppercase tracking-widest text-sm text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
                            Contact Me
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
