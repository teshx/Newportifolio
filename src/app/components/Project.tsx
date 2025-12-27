
import React from 'react';

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
        <div className="group flex flex-col h-full overflow-hidden rounded-sm bg-white dark:bg-[#161616] border border-black/5 dark:border-white/5 transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none">
            {/* Top Image */}
            <div className="relative aspect-video overflow-hidden border-b border-black/5 dark:border-white/5">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-black dark:bg-[#d1d5db] hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest rounded-sm transition-all transform active:scale-95 shadow-lg"
                    >
                        Site <i className="fas fa-external-link-alt ml-2 text-[10px]"></i>
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all transform active:scale-95"
                    >
                        Github <i className="fab fa-github ml-2 text-sm"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const projects: ProjectItem[] = [
        {
            id: 'the-garden',
            title: 'The Garden',
            description: 'Building an ecosystem dedicated to grow, share and highlight developer talents through collaborative tools.',
            imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['Svelte', 'Typescript', 'Express', 'AWS', 'Redis']
        },
        {
            id: 'odit-et',
            title: 'odit.et',
            description: 'Automated finance auditing system that parses SMS notifications using advanced NLP algorithms.',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['SASS', 'Fullstack', 'NLP', 'DataViz']
        },
        {
            id: 'csa-page-scrape',
            title: 'Csa page scrape',
            description: 'A massive automated Python scraping engine that processed over 5000 subpages of technical articles.',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['Selenium', 'Python', 'Data-Mining', 'IOT']
        },
        {
            id: 'fintech-pulse',
            title: 'Fintech Pulse',
            description: 'Real-time dashboard for cryptocurrency market analysis and portfolio tracking with high-frequency updates.',
            imageUrl: 'https://images.unsplash.com/photo-1642790103517-130f9a2ba393?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['React', 'Next.js', 'WebSockets', 'Chart.js']
        },
        {
            id: 'ai-content-engine',
            title: 'AI Content Engine',
            description: 'SaaS platform leveraging Gemini API for automated marketing copy and smart social scheduling.',
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['Node.js', 'Gemini API', 'PostgreSQL', 'Prisma']
        },
        {
            id: 'nexus-logistics',
            title: 'Nexus Logistics',
            description: 'Enterprise supply chain tracker featuring geofencing and automated inventory management workflows.',
            imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#',
            tags: ['Docker', 'Microservices', 'MongoDB', 'Firebase']
        }
    ];

    return (
        <section id="projects" className="py-24 px-[10vw] lg:px-[15vw] bg-transparent border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-black dark:text-white/90">
                        Selected Works
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-black/30 dark:text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                        <i className="fas fa-cube text-[#2ecc71]"></i>
                        <span>Engineering solutions for complex <span className="text-black/60 dark:text-white/60">Digital Ecosystems</span></span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                {/* Archive Footer */}
                <div className="mt-24 flex justify-center">
                    <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
