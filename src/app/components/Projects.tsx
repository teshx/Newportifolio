
import React from 'react';

interface ProjectItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    sourceUrl: string;
    techIcons?: React.ReactNode[];
    badges?: { color: string; icon: React.ReactNode }[];
    highlighted?: boolean;
}

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
    return (
        <div className="group relative flex flex-col sm:flex-row sm:items-stretch gap-0 h-full overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-zinc-900/20 backdrop-blur-sm transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 hover:shadow-2xl">

            {/* Left Image Side - Stretches to match content height */}
            <div className="relative z-10 flex-shrink-0 w-full sm:w-48 md:w-56 h-48 sm:h-auto overflow-hidden border-b sm:border-b-0 sm:border-r border-black/5 dark:border-white/10">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.6] group-hover:grayscale-0"
                />

                {/* Subtle overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none"></div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* Right Content Side */}
            <div className={`relative flex-grow p-6 sm:p-8 transition-all duration-300 flex flex-col justify-center ${project.highlighted
                ? 'bg-white/80 dark:bg-zinc-900/60'
                : 'bg-transparent'
                }`}>

                {/* Tech Icons - Moved to Top Right Corner */}
                {project.techIcons && (
                    <div className="absolute top-4 right-4 flex items-center gap-3 p-2 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-xl border border-black/10 dark:border-white/10 z-20">
                        {project.techIcons.map((icon, i) => (
                            <span key={i} className="text-black/40 dark:text-white/40 text-xl hover:text-[#2ecc71] dark:hover:text-[#2ecc71] transition-all duration-300">
                                {icon}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mb-auto">
                    {/* Project Title */}
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                        <h3 className="text-base md:text-lg font-bold tracking-tight uppercase text-black dark:text-white group-hover:text-[#2ecc71] transition-colors duration-300">
                            {project.title}
                        </h3>
                    </div>

                    <div className="h-[2px] w-8 bg-[#2ecc71] mb-4 group-hover:w-16 transition-all duration-500"></div>

                    <p className="text-sm text-black/60 dark:text-white/50 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-[9px] font-black uppercase tracking-widest hover:bg-[#2ecc71] hover:text-black dark:hover:bg-[#2ecc71] transition-all transform active:scale-95"
                    >
                        <i className="fas fa-external-link-alt"></i> View Live
                    </a>
                    <a
                        href={project.sourceUrl}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 text-[9px] font-black uppercase tracking-widest hover:border-black dark:hover:border-white transition-all transform active:scale-95"
                    >
                        <i className="fas fa-code"></i> Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const projects: ProjectItem[] = [
        {
            id: 'scholar-xiv',
            title: 'project 1',
            description: 'project 1 description',
            imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=600&fit=crop',
            liveUrl: '#',
            sourceUrl: '#',
            techIcons: [
                <i className="fab fa-react"></i>,
                <i className="fab fa-python"></i>,
                <i className="fas fa-brain"></i>
            ],
            badges: [
                { color: '#2ecc71', icon: <i className="fas fa-leaf"></i> }
            ]
        },
        {
            id: 'native-chat',
            title: 'project 2',
            description: 'project 2 description',
            imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop',
            liveUrl: '#',
            sourceUrl: '#',
            highlighted: true,
            techIcons: [
                <i className="fab fa-js"></i>,
                <i className="fab fa-node-js"></i>,
                <i className="fab fa-docker"></i>
            ],
            badges: [
                { color: '#3498db', icon: <i className="fab fa-flutter"></i> },
                { color: '#f1c40f', icon: <i className="fas fa-sparkles"></i> }
            ]
        },
        {
            id: 'token-counter',
            title: 'project 3',
            description: 'project 3 description',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=600&h=600&fit=crop',
            liveUrl: '#',
            sourceUrl: '#',
            techIcons: [
                <i className="fab fa-js-square"></i>,
                <i className="fas fa-database"></i>,
                <i className="fab fa-aws"></i>
            ],
            badges: [
                { color: '#9b59b6', icon: <i className="fas fa-microchip"></i> }
            ]
        },
        {
            id: 'arch-viz',
            title: 'project 4',
            description: 'project 4 description',
            imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?w=600&h=600&fit=crop',
            liveUrl: '#',
            sourceUrl: '#',
            techIcons: [
                <i className="fab fa-laravel"></i>,
                <i className="fab fa-php"></i>,
                <i className="fas fa-cube"></i>
            ],
            badges: [
                { color: '#e67e22', icon: <i className="fas fa-cube"></i> }
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 px-[5vw] md:px-[10vw]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                    <div className="space-y-4">
                        <span className="inline-block text-[#2ecc71] text-xs font-black uppercase tracking-[0.4em] mb-2 border-l-2 border-[#2ecc71] pl-4">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-black dark:text-white">
                            Selected <span className="text-black/30 dark:text-white/30">Works</span>
                        </h2>
                    </div>
                    <p className="text-black/40 dark:text-white/30 font-mono text-[10px] max-w-xs uppercase tracking-[0.2em] leading-relaxed text-left md:text-right">
                        Curated selection of software systems built with modern tech stacks and deep AI integrations.
                    </p>
                </div>

                {/* 2-Column Grid with Equal Height Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                {/* View Archive Link */}
                <div className="mt-20 flex justify-center">
                    <a href="#" className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">
                        <div className="h-[1px] w-12 bg-current opacity-20 group-hover:w-20 group-hover:opacity-100 transition-all"></div>
                        View Full Archive
                        <div className="h-[1px] w-12 bg-current opacity-20 group-hover:w-20 group-hover:opacity-100 transition-all"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
