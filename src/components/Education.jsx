import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import Card from './common/Card';

const education = [
    {
        id: 1,
        degree: "B.Tech Computer Science Engineering",
        institution: "Lovely Professional University",
        year: "2023 - 2027",
        grade: "CGPA 6.98",
        status: "Pursuing",
        color: "border-primary"
    },
    {
        id: 2,
        degree: "Intermediate (XII)",
        institution: "New Central Public Academy (CBSE)",
        year: "2021 - 2022",
        grade: "62.4%",
        status: "Completed",
        color: "border-purple-500"
    },
    {
        id: 3,
        degree: "Matriculation (X)",
        institution: "St. Xavier’s School (CBSE)",
        year: "2019 - 2020",
        grade: "76%",
        status: "Completed",
        color: "border-blue-500"
    }
];

const Education = () => {
    return (
        <SectionWrapper id="education">
            <AnimatedHeading title="Education" subtitle="Academic Journey" center />

            <div className="relative max-w-4xl mx-auto mt-16 px-4">
                {/* Central Line */}
                <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-primary via-purple-500 to-blue-500 opacity-30 md:-translate-x-1/2" />

                <div className="space-y-12">
                    {education.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)] mt-6 md:mt-8">
                                    <div className="absolute inset-0 bg-primary animate-ping opacity-20 rounded-full" />
                                </div>

                                {/* Spacer for Desktop */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                    <Card className={`
                                        p-6 relative group border-l-4 ${item.color}
                                        ${isEven ? 'md:text-left md:mr-12' : 'md:text-right md:ml-12'}
                                    `}>
                                        <div className={`flex items-center gap-2 mb-2 text-primary opacity-80 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <FiBookOpen />
                                            <span className="text-xs font-mono">{item.status}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {item.degree}
                                        </h3>
                                        <p className="text-lg text-gray-300 font-medium mb-4">
                                            {item.institution}
                                        </p>

                                        <div className={`flex flex-wrap gap-4 text-sm text-gray-500 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <div className="flex items-center gap-1">
                                                <FiCalendar className="text-primary/70" />
                                                <span>{item.year}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FiAward className="text-primary/70" />
                                                <span>{item.grade}</span>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
