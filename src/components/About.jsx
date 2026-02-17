import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiAward } from 'react-icons/fi';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import Card from './common/Card';

const About = () => {
    const stats = [
        { label: 'DSA Problems', value: '250+', icon: FiCode, color: 'text-primary' },
        { label: 'Major Projects', value: '3+', icon: FiServer, color: 'text-secondary' },
        { label: 'Years Exp', value: 'Fresher', icon: FiDatabase, color: 'text-accent' },
        { label: 'Achievements', value: '5+', icon: FiAward, color: 'text-yellow-400' },
    ];

    return (
        <SectionWrapper id="about" className="bg-surface/30">
            <AnimatedHeading title="About Me" subtitle="Get to know me" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Digital Profile Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group perspective-1000"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
                    <div className="relative bg-surface/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-105">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                            {/* Placeholder for Profile Image */}
                            <div className="w-full h-full bg-linear-to-br from-gray-800 to-black flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-700">
                                <FiCode className="text-6xl text-white/20" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-2xl font-bold text-white">Ankit Gupta</h3>
                                <p className="text-primary font-medium">Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {/* Small badges/tags */}
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Java</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">React</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Spring Boot</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">AWS</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Bio & Interactive Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                        Crafting digital experiences with <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Precision &amp; Passion</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                        I am a Full Stack Developer with a strong foundation in Computer Science. My expertise lies in building robust backend systems using <span className="text-white font-medium">Spring Boot</span> and creating interactive, responsive frontends with <span className="text-white font-medium">React</span>.
                        <br /><br />
                        I don't just write code; I solve problems. With over <span className="text-white font-medium">250+ DSA problems</span> solved, I bring an analytical mindset to every project, ensuring efficiency and scalability.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="p-4 flex flex-col items-center justify-center text-center gap-2 group hover:bg-white/10 transition-all duration-300 border-white/5 hover:border-primary/50"
                            >
                                <div className={`p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors duration-300`}>
                                    <stat.icon className={`text-2xl ${stat.color} group-hover:scale-110 transition-transform`} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{stat.value}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">{stat.label}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
