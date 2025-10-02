import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaHeart, FaCoffee, FaVideo, FaEdit } from 'react-icons/fa';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const stats = [
        { number: "50+", label: "Projects Completed", icon: FaCode },
        { number: "3+", label: "Years Experience", icon: FaRocket },
        { number: "25+", label: "Happy Clients", icon: FaUsers },
        { number: "100%", label: "Passion", icon: FaHeart }
    ];

    const values = [
        {
            icon: FaCode,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and efficient code that stands the test of time."
        },
        {
            icon: FaRocket,
            title: "Innovation",
            description: "Embracing new technologies and methodologies to create cutting-edge solutions."
        },
        {
            icon: FaUsers,
            title: "Collaboration",
            description: "Working closely with teams and clients to bring ideas to life."
        },
        {
            icon: FaLightbulb,
            title: "Problem Solving",
            description: "Turning complex challenges into elegant, user-friendly solutions."
        }
    ];

    const skills = [
        { name: "Frontend Development", level: 90 },
        { name: "Backend Development", level: 85 },
        { name: "Video Editing", level: 95 },
        { name: "UI/UX Design", level: 80 },
        { name: "Database Management", level: 85 },
        { name: "DevOps & Deployment", level: 75 }
    ];

    return (
        <section id="about" className="py-20 bg-background-light relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                    }}
                    transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
                    }}
                    className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">About Me</span>
                        </h2>
                        <p className="text-lg text-accent/80 max-w-3xl mx-auto">
                            A passionate full-stack developer and creative video editor who loves creating digital experiences that make a difference.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Column - Text Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-lg text-accent/90 leading-relaxed">
                                    Hey there! I'm <span className="text-primary font-semibold">Abhay Tiwari</span>, a passionate 
                                    full-stack developer and creative video editor with a love for creating digital experiences 
                                    that are both beautiful and functional.
                                </p>
                                <p className="text-lg text-accent/90 leading-relaxed">
                                    Currently working at <span className="text-primary font-semibold">Corementores Pvt. Ltd.</span>, 
                                    I specialize in modern JavaScript frameworks, particularly React and Node.js. I also have extensive 
                                    experience in video editing using Adobe Premiere Pro, After Effects, and DaVinci Resolve.
                                </p>
                                <p className="text-lg text-accent/90 leading-relaxed">
                                    With over 3 years of experience in web development, I believe in writing clean, maintainable code 
                                    and creating user experiences that leave a lasting impression. I'm always excited to take on new 
                                    challenges and learn something new!
                                </p>
                                <p className="text-lg text-accent/90 leading-relaxed">
                                    When I'm not coding or editing videos, you'll find me exploring new technologies, contributing to 
                                    open-source projects, or sharing knowledge with the developer community. I'm based in 
                                    <span className="text-primary font-semibold"> Bhiduna Meerganj, Jaunpur</span> and always open to 
                                    collaborations on full-stack projects and creative editing.
                                </p>
                            </div>

                            {/* Fun Facts */}
                            <motion.div variants={itemVariants} className="space-y-3">
                                <div className="flex items-center space-x-4 text-primary">
                                    <FaCoffee size={20} />
                                    <span className="text-accent/80">Powered by coffee ☕ and fueled by curiosity</span>
                                </div>
                                <div className="flex items-center space-x-4 text-primary">
                                    <FaVideo size={20} />
                                    <span className="text-accent/80">From basic to advanced video editing with professional tools</span>
                                </div>
                                <div className="flex items-center space-x-4 text-primary">
                                    <FaEdit size={20} />
                                    <span className="text-accent/80">Code is my craft, and editing is my art</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-6 rounded-xl text-center card-hover"
                                >
                                    <div className="flex justify-center mb-3">
                                        <stat.icon className="text-primary text-2xl" />
                                    </div>
                                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                                    <div className="text-accent/80 text-sm font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            <span className="gradient-text">Technical Skills</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-2"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-accent font-medium">{skill.name}</span>
                                        <span className="text-primary font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-accent/10 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            <span className="gradient-text">What I Value</span>
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-6 rounded-xl text-center card-hover"
                                >
                                    <div className="flex justify-center mb-4">
                                        <value.icon className="text-primary text-3xl" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-accent mb-3">{value.title}</h4>
                                    <p className="text-accent/70 text-sm leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-accent mb-4">
                                Let's Build Something Amazing Together
                            </h3>
                            <p className="text-accent/80 mb-6">
                                I'm always excited to work on new projects and collaborate with fellow developers and designers. 
                                Whether it's web development or video editing, let's create something extraordinary!
                            </p>
                            <motion.button
                                onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Get In Touch
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;