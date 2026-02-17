import { FiAward, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import Card from './common/Card';
import GlowButton from './common/GlowButton';

const certifications = [
    {
        title: "Cloud Computing",
        issuer: "IIT Kharagpur (NPTEL)",
        date: "2023",
        link: "#",
        color: "group-hover:text-cyan-400"
    },
    {
        title: "Data Structures & Algorithms",
        issuer: "Udemy / Coursera",
        date: "2023",
        link: "#",
        color: "group-hover:text-purple-400"
    },
    {
        title: "Mastering DSA (C++)",
        issuer: "Udemy / Coursera",
        date: "2022",
        link: "#",
        color: "group-hover:text-blue-400"
    }
];

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <AnimatedHeading title="Certifications" subtitle="Credentials" center />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                    <Card
                        key={index}
                        className="group relative p-8 hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <FiAward className={`text-6xl opacity-10 ${cert.color}`} />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-2xl text-gray-400 ${cert.color} transition-colors`}>
                                    <FiAward />
                                </div>
                                <h3 className={`text-xl font-bold text-white mb-2 ${cert.color} transition-colors`}>
                                    {cert.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                            </div>

                            <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                                <span className="text-xs font-mono text-gray-500">{cert.date}</span>
                                <GlowButton href={cert.link} variant="secondary" className="!px-3 !py-1 !text-xs" icon={FiExternalLink}>
                                    Verify
                                </GlowButton>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
