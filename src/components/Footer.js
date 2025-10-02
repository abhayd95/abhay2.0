import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/abhay_d95/",
            label: "Instagram"
        },
        {
            icon: FaGithub,
            href: "https://github.com/abhayd95",
            label: "GitHub"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/abhay-tiwari-545a57358/",
            label: "LinkedIn"
        }
    ];

    return (
        <footer className="bg-background-dark border-t border-accent/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                    <span className="text-background font-bold">AT</span>
                                </div>
                                <span className="text-2xl font-bold gradient-text">Abhay Tiwari</span>
                            </div>
                            <p className="text-accent/70 leading-relaxed max-w-md mb-4">
                                Full-stack developer and creative video editor passionate about creating digital experiences 
                                that blend creativity with cutting-edge technology. Currently working at Corementores Pvt. Ltd.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="text-accent/70 hover:text-primary transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-accent mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-accent/70 hover:text-primary transition-colors duration-300">About</a></li>
                            <li><a href="#skills" className="text-accent/70 hover:text-primary transition-colors duration-300">Skills</a></li>
                            <li><a href="#projects" className="text-accent/70 hover:text-primary transition-colors duration-300">Projects</a></li>
                            <li><a href="#contact" className="text-accent/70 hover:text-primary transition-colors duration-300">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold text-accent mb-4">Get In Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-accent/70">
                                <FaEnvelope size={16} />
                                <span>hello@abhayvirus.dev</span>
                            </div>
                            <div className="flex items-center space-x-3 text-accent/70">
                                <FaMapMarkerAlt size={16} />
                                <span>Bhiduna Meerganj, Jaunpur</span>
                            </div>
                            <div className="flex items-center space-x-3 text-accent/70">
                                <span className="text-primary">🏢</span>
                                <span>Corementores Pvt. Ltd.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="flex items-center space-x-2 text-accent/70 mb-4 md:mb-0">
                        <span>&copy; {currentYear} Abhay Tiwari. Made with</span>
                        <FaHeart className="text-primary animate-pulse" />
                        <span>and</span>
                        <FaCode className="text-primary" />
                    </div>

                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 glass rounded-lg text-accent hover:text-primary transition-colors duration-300"
                    >
                        <span>Back to Top</span>
                    </motion.button>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8 pt-8 border-t border-accent/5"
                >
                    <p className="text-accent/50 text-sm">
                        Built with React, Framer Motion, Tailwind CSS, and lots of ☕
                    </p>
                    <p className="text-accent/40 text-xs mt-2">
                        💭 Coding my way through life | 👨‍💻 Full-Stack Explorer | 🎬 Creative Video Editor
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;