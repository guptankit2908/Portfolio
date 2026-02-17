import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SectionWrapper from './common/SectionWrapper';
import AnimatedHeading from './common/AnimatedHeading';
import GlowButton from './common/GlowButton';
import Card from './common/Card';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast.error("Please fill in all fields.");
            return;
        }

        setLoading(true);

        const serviceId = "service_otabfva";
        const templateId = "template_3t74oeh";
        const publicKey = "pf9QJ_KXuTH_Yus-w";

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: name,
                    from_email: email,
                    message: `${message}\n\n[Sender Email: ${email}]`,
                    reply_to: email,
                    to_name: "Ankit Gupta",
                },
                publicKey
            );

            toast.success("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="relative overflow-hidden">
            {/* Floating Orbs Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <AnimatedHeading title="Let's Connect" subtitle="Get in Touch" center />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                {/* Contact Info Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                            Let's Build Something <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                                Amazing Together
                            </span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm currently available for freelance projects and full-time opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card className="flex items-center gap-6 p-6 bg-white/5 border-white/5 hover:border-primary/30 transition-all duration-300 group">
                            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:gupta.ankit1302@gmail.com" className="text-xl text-white font-medium hover:text-primary transition-colors">
                                    gupta.ankit1302@gmail.com
                                </a>
                            </div>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="flex items-center gap-4 p-6 bg-white/5 border-white/5 hover:border-primary/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <FiMapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-lg text-white font-medium">India</p>
                                </div>
                            </Card>

                            <Card className="flex items-center gap-4 p-6 bg-white/5 border-white/5 hover:border-primary/30 transition-all duration-300 group">
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <FiPhone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+917388071054" className="text-lg text-white font-medium hover:text-primary transition-colors">
                                        +91 7388071054
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="p-8 md:p-10 backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ankii"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="ankii@example.com"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <GlowButton
                                type="submit"
                                variant="primary"
                                className="w-full !text-base !py-4"
                                icon={FiSend}
                                disabled={loading}
                            >
                                {loading ? 'Sending Message...' : 'Send Message'}
                            </GlowButton>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
