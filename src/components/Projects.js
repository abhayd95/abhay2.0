import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
    FaPython,
    FaMobile,
    FaDatabase,
    FaCode,
    FaRocket
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

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

    const projects = [{
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
            image: "/api/placeholder/600/400",
            technologies: [
                { name: "React", icon: FaReact, color: "#61DAFB" },
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
            ],
            category: "fullstack",
            github: "https://github.com/abhayvirus/ecommerce-platform",
            live: "https://ecommerce-demo.abhayvirus.dev",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
            image: "/api/placeholder/600/400",
            technologies: [
                { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
            ],
            category: "frontend",
            github: "https://github.com/abhayvirus/task-manager",
            live: "https://tasks.abhayvirus.dev",
            featured: true
        },
        {
            id: 3,
            title: "API Analytics Dashboard",
            description: "A comprehensive analytics dashboard for monitoring API performance, usage metrics, and real-time insights.",
            image: "/api/placeholder/600/400",
            technologies: [
                { name: "React", icon: FaReact, color: "#61DAFB" },
                { name: "Python", icon: FaPython, color: "#3776AB" },
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "Database", icon: FaDatabase, color: "#FF6B6B" }
            ],
            category: "backend",
            github: "https://github.com/abhayvirus/api-analytics",
            live: "https://analytics.abhayvirus.dev",
            featured: false
        },
        {
            id: 4,
            title: "Mobile Fitness Tracker",
            description: "A React Native mobile app for tracking workouts, nutrition, and fitness goals with social features.",
            image: "/api/placeholder/600/400",
            technologies: [
                { name: "React Native", icon: FaMobile, color: "#61DAFB" },
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
            ],
            category: "mobile",
            github: "https://github.com/abhayvirus/fitness-tracker",
            live: "https://fitness.abhayvirus.dev",
            featured: false
        },
        {
            id: 5,
            title: "Real-time Chat Application",
            description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities.",
            image: "/api/placeholder/600/400",
            technologies: [
                { name: "React", icon: FaReact, color: "#61DAFB" },
                { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                { name: "WebSocket", icon: FaCode, color: "#F7DF1E" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
            ],
            category: "fullstack",
            github: "https://github.com/abhayvirus/chat-app",
            live: "https://chat.abhayvirus.dev",
            featured: true
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
            image: "/api/placeholder/600/400",
            technologies: [
                { name: "React", icon: FaReact, color: "#61DAFB" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
            ],
            category: "frontend",
            github: "https://github.com/abhayvirus/portfolio",
            live: "https://abhayvirus.dev",
            featured: false
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'mobile', label: 'Mobile' }
    ];

    const filteredProjects = activeFilter === 'all' ?
        projects :
        projects.filter(project => project.category === activeFilter);

    return ( <
            section id = "projects"
            className = "py-20 bg-background-light relative overflow-hidden" > { /* Background Elements */ } <
            div className = "absolute inset-0 overflow-hidden" >
            <
            motion.div animate = {
                {
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }
            }
            transition = {
                {
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                }
            }
            className = "absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" /
            >
            <
            /div>

            <
            div className = "container mx-auto px-6 relative z-10" >
            <
            motion.div variants = { containerVariants }
            initial = "hidden"
            whileInView = "visible"
            viewport = {
                { once: true, amount: 0.2 }
            }
            className = "max-w-7xl mx-auto" > { /* Section Header */ } <
            motion.div variants = { itemVariants }
            className = "text-center mb-16" >
            <
            h2 className = "text-4xl md:text-5xl font-bold mb-6" >
            <
            span className = "gradient-text" > Featured Projects < /span> < /
            h2 > <
            p className = "text-lg text-accent/80 max-w-3xl mx-auto" >
            A showcase of my recent work, featuring innovative solutions and cutting - edge technologies. <
            /p> < /
            motion.div >

            { /* Filter Buttons */ } <
            motion.div variants = { itemVariants }
            className = "flex flex-wrap justify-center gap-4 mb-12" > {
                filters.map((filter) => ( <
                    motion.button key = { filter.id }
                    onClick = {
                        () => setActiveFilter(filter.id)
                    }
                    whileHover = {
                        { scale: 1.05 }
                    }
                    whileTap = {
                        { scale: 0.95 }
                    }
                    className = { `px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-background'
                    : 'glass text-accent hover:bg-primary/20'
                }` } > { filter.label } <
                    /motion.button>
                ))
            } <
            /motion.div>

            { /* Projects Grid */ } <
            AnimatePresence mode = "wait" >
            <
            motion.div key = { activeFilter }
            initial = {
                { opacity: 0 }
            }
            animate = {
                { opacity: 1 }
            }
            exit = {
                { opacity: 0 }
            }
            transition = {
                { duration: 0.3 }
            }
            className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8" > {
                filteredProjects.map((project, index) => ( <
                        motion.div key = { project.id }
                        initial = {
                            { opacity: 0, y: 30 }
                        }
                        animate = {
                            { opacity: 1, y: 0 }
                        }
                        exit = {
                            { opacity: 0, y: -30 }
                        }
                        transition = {
                            { delay: index * 0.1 }
                        }
                        whileHover = {
                            { scale: 1.05 }
                        }
                        className = "glass rounded-2xl overflow-hidden card-hover group" > { /* Project Image */ } <
                        div className = "relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden" >
                        <
                        div className = "absolute inset-0 flex items-center justify-center" >
                        <
                        FaCode className = "text-6xl text-primary/30" / >
                        <
                        /div> {
                        project.featured && ( <
                            div className = "absolute top-4 left-4" >
                            <
                            span className = "px-3 py-1 bg-primary text-background text-xs font-semibold rounded-full" >
                            Featured <
                            /span> < /
                            div >
                        )
                    } <
                    /div>

                    { /* Project Content */ } <
                    div className = "p-6" >
                    <
                    h3 className = "text-xl font-bold text-accent mb-3" > { project.title } < /h3> <
                    p className = "text-accent/70 text-sm mb-4 leading-relaxed" > { project.description } <
                    /p>

                    { /* Technologies */ } <
                    div className = "flex flex-wrap gap-2 mb-4" > {
                        project.technologies.map((tech) => ( <
                            div key = { tech.name }
                            className = "flex items-center space-x-1 px-2 py-1 bg-background-dark rounded-md" >
                            <
                            tech.icon size = { 14 }
                            style = {
                                { color: tech.color }
                            }
                            /> <
                            span className = "text-xs text-accent/80" > { tech.name } < /span> < /
                            div >
                        ))
                    } <
                    /div>

                    { /* Action Buttons */ } <
                    div className = "flex space-x-3" >
                    <
                    motion.a href = { project.github }
                    target = "_blank"
                    rel = "noopener noreferrer"
                    whileHover = {
                        { scale: 1.05 }
                    }
                    whileTap = {
                        { scale: 0.95 }
                    }
                    className = "flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-background-dark text-accent rounded-lg hover:bg-primary hover:text-background transition-all duration-300 group" >
                    <
                    FaGithub size = { 16 }
                    /> <
                    span className = "text-sm font-medium" > Code < /span> <
                    /motion.a> <
                    motion.a href = { project.live }
                    target = "_blank"
                    rel = "noopener noreferrer"
                    whileHover = {
                        { scale: 1.05 }
                    }
                    whileTap = {
                        { scale: 0.95 }
                    }
                    className = "flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-dark transition-all duration-300 group" >
                    <
                    FaExternalLinkAlt size = { 16 }
                    /> <
                    span className = "text-sm font-medium" > Live < /span> <
                    /motion.a> <
                    /div> <
                    /div> <
                    /motion.div>
                ))
        } <
        /motion.div> <
        /AnimatePresence>

    { /* Call to Action */ } <
    motion.div variants = { itemVariants }
    className = "text-center mt-16" >
        <
        div className = "glass p-8 rounded-2xl max-w-2xl mx-auto" >
        <
        FaRocket className = "text-4xl text-primary mx-auto mb-4" / >
        <
        h3 className = "text-2xl font-bold text-accent mb-4" >
        Have a Project in Mind ?
        <
        /h3> <
    p className = "text-accent/80 mb-6" >
        I 'm always excited to work on new projects and bring ideas to life. Let'
    s discuss your next big idea!
        <
        /p> <
    motion.button onClick = {
        () => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    whileHover = {
        { scale: 1.05 }
    }
    whileTap = {
        { scale: 0.95 }
    }
    className = "btn-primary" >
        Start a Project <
        /motion.button> < /
        div > <
        /motion.div> < /
        motion.div > <
        /div> < /
        section >
);
};

export default Projects;