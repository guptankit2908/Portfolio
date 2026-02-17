import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiCode, FiLayout, FiServer, FiTerminal, FiCpu
} from 'react-icons/fi';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import Card from './common/Card';

const skillsData = [
    {
        id: 'languages',
        label: 'Languages',
        icon: FiCode,
        skills: [
            { name: "Java", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "C++", level: 80 },
            { name: "Python", level: 75 },
            { name: "TypeScript", level: 70 },
            { name: "SQL", level: 85 }
        ]
    },
    {
        id: 'frontend',
        label: 'Frontend',
        icon: FiLayout,
        skills: [
            { name: "React", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Redux", level: 80 },
            { name: "Framer Motion", level: 75 },
            { name: "HTML5/CSS3", level: 95 }
        ]
    },
    {
        id: 'backend',
        label: 'Backend',
        icon: FiServer,
        skills: [
            { name: "Spring Boot", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 75 },
            { name: "Microservices", level: 70 },
            { name: "REST APIs", level: 90 }
        ]
    },
    {
        id: 'tools',
        label: 'Tools & DevOps',
        icon: FiTerminal,
        skills: [
            { name: "Git/GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "AWS", level: 60 },
            { name: "Postman", level: 85 },
            { name: "Figma", level: 70 }
        ]
    },
    {
        id: 'core',
        label: 'Core Concepts',
        icon: FiCpu,
        skills: [
            { name: "Data Structures", level: 90 },
            { name: "Algorithms", level: 85 },
            { name: "OOPs", level: 90 },
            { name: "DBMS", level: 85 },
            { name: "System Design", level: 70 }
        ]
    }
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState(skillsData[0].id);

    return (
        <SectionWrapper id="skills">
            <AnimatedHeading title="Technical Arsenal" subtitle="My Skills" center />

            <div className="flex flex-col items-center">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                                ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-105'
                                    : 'bg-surface/50 text-gray-400 hover:text-white hover:bg-white/10'
                                }
                            `}
                        >
                            <tab.icon className="text-lg" />
                            <span className="font-medium">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="w-full max-w-4xl min-h-[400px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-6"
                        >
                            {skillsData.find(t => t.id === activeTab)?.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="p-6 h-full flex flex-col justify-between group hover:bg-white/10 transition-colors border-white/5 hover:border-primary/30">
                                        <div className="mb-4">
                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h4>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className="bg-linear-to-r from-primary to-accent h-full rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                        <div className="flex justify-end mt-2">
                                            <span className="text-xs text-gray-500">{skill.level}%</span>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
