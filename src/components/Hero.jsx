import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import GlowButton from './common/GlowButton';
import cvFile from '../assets/AnkitGupta.pdf';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Ambience handled globally */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 rounded-full bg-primary/10 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-gray-200 font-medium tracking-wide text-xs uppercase">Available for new projects</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-tight">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">Ankit Gupta</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="min-h-[60px] text-2xl md:text-4xl text-gray-300 mb-8 font-light flex items-center justify-center gap-3">
                        <span>I am a</span>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'Java Specialist',
                                2000,
                                'React Enthusiast',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="font-semibold text-white border-b-2 border-accent"
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Building scalable, high-performance full-stack web applications with a focus on premium user experiences and robust backend systems.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <GlowButton href="#projects" variant="primary" icon={FiArrowRight} className="w-full sm:w-auto">View Projects</GlowButton>
                        <GlowButton href={cvFile} download="Ankit_Gupta_CV.pdf" variant="secondary" icon={FiDownload} className="w-full sm:w-auto">Download CV</GlowButton>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-8 text-gray-400">
                        <SocialLink href="https://github.com/guptankit2908" icon={FiGithub} delay={0} />
                        <SocialLink href="https://linkedin.com/in/ankitgupta2908" icon={FiLinkedin} delay={0.1} />
                        <SocialLink href="#contact" icon={FiMail} delay={0.2} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-12 bg-linear-to-b from-transparent via-primary to-transparent" />
                <span className="text-[10px] text-primary/50 uppercase tracking-[0.2em]">Scroll</span>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon: Icon, delay }) => {
    const isInternal = href.startsWith('#');
    return (
        <motion.a
            href={href}
            target={isInternal ? "_self" : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + delay, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, color: "#fff" }}
            className="hover:text-white transition-colors"
        >
            <Icon size={24} />
        </motion.a>
    );
};

export default Hero;
