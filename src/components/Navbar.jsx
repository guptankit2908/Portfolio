import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import clsx from 'clsx';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px" // Trigger when element is in the middle 20% of viewport
            }
        );

        navLinks.forEach((link) => {
            const element = document.getElementById(link.href.substring(1));
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Ankit Gupta" className="h-10 w-auto" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm font-medium tracking-wide transition-colors relative",
                                activeSection === link.href.substring(1) ? "text-white drop-shadow-md" : "text-gray-200 hover:text-white drop-shadow-sm"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent rounded-full"
                                />
                            )}
                        </a>
                    ))}
                    <div className="h-6 w-px bg-white/10 mx-4" />
                    <div className="flex space-x-4">
                        <a href="https://github.com/guptankit2908" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://linkedin.com/in/ankitgupta2908" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FiLinkedin size={20} />
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                            <FiMail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4">
                                <a href="https://github.com/guptankit2908" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FiGithub size={24} />
                                </a>
                                <a href="https://linkedin.com/in/ankitgupta2908" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FiLinkedin size={24} />
                                </a>
                                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
                                    <FiMail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
