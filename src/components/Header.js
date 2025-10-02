import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800"
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <span className="text-2xl font-bold text-primary">AV</span>
                        <span className="text-xl font-semibold text-accent">Abhay Virus</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-accent hover:text-primary transition-colors duration-300">
                            About
                        </a>
                        <a href="#skills" className="text-accent hover:text-primary transition-colors duration-300">
                            Skills
                        </a>
                        <a href="#projects" className="text-accent hover:text-primary transition-colors duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-accent hover:text-primary transition-colors duration-300">
                            Contact
                        </a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-background px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300"
                        >
                            Get In Touch
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-accent hover:text-primary transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-gray-800"
                    >
                        <div className="flex flex-col space-y-4 pt-4">
                            <a href="#about" className="text-accent hover:text-primary transition-colors duration-300">
                                About
                            </a>
                            <a href="#skills" className="text-accent hover:text-primary transition-colors duration-300">
                                Skills
                            </a>
                            <a href="#projects" className="text-accent hover:text-primary transition-colors duration-300">
                                Projects
                            </a>
                            <a href="#contact" className="text-accent hover:text-primary transition-colors duration-300">
                                Contact
                            </a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-background px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 mt-4"
                            >
                                Get In Touch
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;
