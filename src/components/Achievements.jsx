import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiAward, FiStar, FiTarget, FiCode, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import Card from './common/Card';

const achievements = [
    {
        id: 1,
        title: "250+ DSA Problems",
        role: "Problem Solver",
        date: "2023 - Present",
        description: "Consistent problem solving on LeetCode & GeeksForGeeks, mastering algorithms and data structures.",
        icon: FiCode,
        color: "text-green-400"
    },
    {
        id: 2,
        title: "Campus Ambassador",
        role: "Leadership",
        date: "2024",
        description: "Selected as Campus Ambassador for a major tech fest, driving student engagement and participation.",
        icon: FiTarget,
        color: "text-red-400"
    },
    {
        id: 3,
        title: "Hackathon Winner",
        role: "1st Runner Up",
        date: "2023",
        description: "Secured 2nd place in National Level Hackathon among 50+ teams by building an innovative healthcare solution.",
        icon: FiAward,
        color: "text-yellow-400"
    },
    {
        id: 4,
        title: "Academic Excellence",
        role: "Top 5%",
        date: "2021 - 2025",
        description: "Maintained a consistently high CGPA throughout the engineering curriculum.",
        icon: FiStar,
        color: "text-blue-400"
    }
];

const Achievements = () => {
    return (
        <SectionWrapper id="achievements">
            <AnimatedHeading title="Milestones" subtitle="My Journey" center />

            <div className="relative mt-20">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Dot on Line (Desktop) */}
                            {/* <div className="hidden -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:scale-150 transition-transform duration-300" /> */}

                            <Card className={`
                                p-6 relative z-0 h-full flex flex-col gap-4 border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300
                                ${index % 2 === 0 ? 'md:-translate-y-12' : 'md:translate-y-12'}
                            `}>
                                <div className="flex justify-between items-start">
                                    <div className={`p-3 rounded-full bg-white/5 ${item.color} text-2xl`}>
                                        <item.icon />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                        {item.date}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-primary/80 font-medium mb-2">{item.role}</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
