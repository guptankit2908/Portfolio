import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-surface/50 border-t border-white/5 py-12 relative overflow-hidden">
            {/* Top glowing border effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mb-6">
                    Ankit Gupta
                </h2>

                <div className="flex justify-center space-x-8 mb-8">
                    <a href="https://github.com/guptankit2908" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                        <FiGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/ankitgupta2908" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors hover:scale-110 transform duration-200">
                        <FiLinkedin size={24} />
                    </a>
                    <a href="mailto:gupta.ankit1302@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors hover:scale-110 transform duration-200">
                        <FiMail size={24} />
                    </a>
                </div>

                <p className="text-gray-500 text-sm">
                    Designed & Developed by <span className="text-white">Ankit Gupta</span>.<br /><br />
                    Built with React, Tailwind & Framer Motion.
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
