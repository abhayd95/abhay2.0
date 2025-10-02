import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLaptopCode, FaArrowDown, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                    }}
                    transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
                    }}
                    className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
                    }}
                    transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
                    }}
                    className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                    }}
                    transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-lg"
                />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative">
                            <motion.img
                                src="/abhay.jpeg"
                                alt="Abhay Tiwari"
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                onLoad={() => console.log('Image loaded successfully')}
                                onError={(e) => {
                                    console.log('Image failed to load:', e);
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div 
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/20 shadow-2xl flex items-center justify-center text-primary text-4xl font-bold"
                                style={{ display: 'none' }}
                            >
                                AT
                            </div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary/30"
                            />
                        </div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="text-primary text-lg font-mono">Hello, I'm</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                    >
                        <span className="gradient-text">Abhay Tiwari</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-4">
                            Full Stack Developer & Creative Video Editor
                        </h2>
                        <p className="text-lg md:text-xl text-accent/80 max-w-3xl mx-auto leading-relaxed">
                            Passionate about creating digital experiences that blend creativity with cutting-edge technology. 
                            Currently working at <span className="text-primary font-semibold">Corementores Pvt. Ltd.</span> 
                            and exploring Next.js, UI/UX, and advanced backend systems.
                        </p>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex justify-center items-center space-x-6 mb-8"
                    >
                        <motion.a
                            href="https://www.instagram.com/abhay_d95/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="text-primary hover:text-secondary transition-colors duration-300"
                        >
                            <FaInstagram size={28} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/abhayd95"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            className="text-primary hover:text-secondary transition-colors duration-300"
                        >
                            <FaGithub size={28} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/abhay-tiwari-545a57358/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="text-primary hover:text-secondary transition-colors duration-300"
                        >
                            <FaLinkedin size={28} />
                        </motion.a>
                    </motion.div>

                    {/* Tech Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex justify-center items-center space-x-8 mb-12"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex flex-col items-center text-primary"
                        >
                            <FaCode size={32} className="mb-2" />
                            <span className="text-sm font-mono">React</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="flex flex-col items-center text-secondary"
                        >
                            <FaRocket size={32} className="mb-2" />
                            <span className="text-sm font-mono">Node.js</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex flex-col items-center text-primary"
                        >
                            <FaLaptopCode size={32} className="mb-2" />
                            <span className="text-sm font-mono">Full Stack</span>
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <motion.button
                            onClick={scrollToContact}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex items-center space-x-2 group"
                        >
                            <HiMail size={20} />
                            <span>Let's Connect</span>
                        </motion.button>

                        <motion.button
                            onClick={scrollToAbout}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary flex items-center space-x-2"
                        >
                            <span>Learn More</span>
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-accent/60 mb-2"
                        >
                            <FaArrowDown size={20} />
                        </motion.div>
                        <span className="text-accent/60 text-sm font-mono">Scroll to explore</span>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0],
                }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
                }}
                className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg blur-sm opacity-50"
            />

            <motion.div
                animate={{
                y: [20, -20, 20],
                rotate: [0, -5, 5, 0],
                }}
                transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
                }}
                className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-lg blur-sm opacity-50"
            />
        </section>
    );
};

export default Hero;