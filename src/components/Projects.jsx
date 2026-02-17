import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import GlowButton from './common/GlowButton';
import Card from './common/Card';

import projectChess from '../assets/project-chess.png';
import projectMedi from '../assets/project-mediconnect.png';
import projectResumind from '../assets/project-resumind.png';

const projects = [
    {
        title: "IndiChessClone",
        description: "A high-performance real-time multiplayer chess platform. Designed for seamless matchmaking and low-latency gameplay, it supports role-based access control and live game state synchronization via WebSockets.",
        tech: ["Spring Boot", "React", "TypeScript", "WebSocket", "PostgreSQL", "Redis"],
        github: "https://github.com/guptankit2908",
        live: "#",
        image: projectChess,
        stats: { stars: "124+", users: "1.2k" }
    },
    {
        title: "Virtual ICU Visits",
        description: "Secure, HIPAA-compliant video communication suite connecting patients in ICU with their families. Features real-time scheduling, role-based authentication, and encrypted video streams for privacy and ease of use.",
        tech: ["WebRTC", "Socket.io", "React", "Node.js", "MySQL"],
        github: "https://github.com/guptankit2908",
        live: "#",
        image: projectMedi,
        stats: { hospitals: "5+", calls: "500+" }
    },
    {
        title: "Resumind AI",
        description: "An intelligent career assistant that leverages the Gemini API to analyze resumes against job descriptions. It provides actionable insights, keyword optimization suggestions, and a compatibility score to boost hiring chances.",
        tech: ["React", "Express.js", "Gemini API", "Tailwind CSS"],
        github: "https://github.com/guptankit2908",
        live: "#",
        image: projectResumind,
        stats: { scans: "450+", accuracy: "92%" }
    }
];

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-20 last:mb-0`}
        >
            {/* Project Image Panel */}
            <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-video bg-surface">
                    {/* Project Image */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Floating Stats Card (Glassmorphism) */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-center">
                        <div className="flex gap-4">
                            {Object.entries(project.stats).map(([key, value]) => (
                                <div key={key}>
                                    <p className="text-xl font-bold text-white">{value}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">{key}</p>
                                </div>
                            ))}
                        </div>
                        <GlowButton href={project.live} variant="primary" className="!px-4 !py-2 !text-xs">
                            View Live <FiArrowRight className="ml-1" />
                        </GlowButton>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                    <span className="text-primary font-mono text-sm tracking-wider">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-primary/50" />
                </div>

                <h3 className="text-4xl font-bold text-white leading-tight">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1"
                    >
                        <FiGithub /> Source Code
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1"
                    >
                        <FiExternalLink /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatedHeading title="Featured Work" subtitle="Selected Projects" />

            <div className="mt-20 flex flex-col gap-8 max-w-6xl mx-auto px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-gray-400 mb-6">Interested in seeing more?</p>
                <GlowButton href="https://github.com/guptankit2908" variant="secondary" icon={FiGithub}>
                    Visit GitHub Profile
                </GlowButton>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
