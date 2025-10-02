import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaDatabase,
    FaMobile,
    FaServer
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    const skillCategories = [{
            title: "Frontend Development",
            description: "Creating beautiful, responsive user interfaces",
            icon: FaReact,
            skills: [
                { name: "React", icon: FaReact, level: 95, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000" },
                { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
                { name: "JavaScript", icon: FaJs, level: 92, color: "#F7DF1E" },
                { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
                { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06B6D4" },
                { name: "Framer Motion", icon: SiFramer, level: 80, color: "#0055FF" }
            ]
        },
        {
            title: "Backend Development",
            description: "Building robust server-side applications",
            icon: FaServer,
            skills: [
                { name: "Node.js", icon: FaNodeJs, level: 90, color: "#339933" },
                { name: "Python", icon: FaPython, level: 85, color: "#3776AB" },
                { name: "GraphQL", icon: SiGraphql, level: 75, color: "#E10098" },
                { name: "REST APIs", icon: FaServer, level: 92, color: "#FF6B6B" }
            ]
        },
        {
            title: "Database & Storage",
            description: "Designing efficient data solutions",
            icon: FaDatabase,
            skills: [
                { name: "MongoDB", icon: SiMongodb, level: 88, color: "#47A248" },
                { name: "PostgreSQL", icon: SiPostgresql, level: 85, color: "#336791" },
                { name: "Redis", icon: SiRedis, level: 80, color: "#DC382D" }
            ]
        },
        {
            title: "DevOps & Tools",
            description: "Streamlining development workflows",
            icon: FaGitAlt,
            skills: [
                { name: "Git", icon: FaGitAlt, level: 90, color: "#F05032" },
                { name: "Docker", icon: FaDocker, level: 85, color: "#2496ED" },
                { name: "AWS", icon: FaAws, level: 80, color: "#FF9900" }
            ]
        }
    ];

    const SkillBar = ({ skill, index }) => ( <
        motion.div initial = {
            { opacity: 0, x: -30 } }
        whileInView = {
            { opacity: 1, x: 0 } }
        viewport = {
            { once: true } }
        transition = {
            { delay: index * 0.1 } }
        className = "mb-6" >
        <
        div className = "flex items-center justify-between mb-2" >
        <
        div className = "flex items-center space-x-3" >
        <
        skill.icon size = { 24 }
        style = {
            { color: skill.color } }
        /> <
        span className = "text-accent font-medium" > { skill.name } < /span> <
        /div> <
        span className = "text-primary font-semibold" > { skill.level } % < /span> <
        /div> <
        div className = "w-full bg-background-dark rounded-full h-2" >
        <
        motion.div initial = {
            { width: 0 } }
        whileInView = {
            { width: `${skill.level}%` } }
        viewport = {
            { once: true } }
        transition = {
            { duration: 1, delay: index * 0.1 + 0.3 } }
        className = "h-2 rounded-full"
        style = {
            {
                background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}CC 100%)`
            }
        }
        /> <
        /div> <
        /motion.div>
    );

    return ( <
        section id = "skills"
        className = "py-20 bg-background relative overflow-hidden" > { /* Background Elements */ } <
        div className = "absolute inset-0 overflow-hidden" >
        <
        motion.div animate = {
            {
                rotate: -360,
                scale: [1, 1.2, 1],
            }
        }
        transition = {
            {
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }
        }
        className = "absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl" /
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
            { once: true, amount: 0.2 } }
        className = "max-w-7xl mx-auto" >
        { /* Section Header */ } <
        motion.div variants = { itemVariants }
        className = "text-center mb-16" >
        <
        h2 className = "text-4xl md:text-5xl font-bold mb-6" >
        <
        span className = "gradient-text" > Skills & Expertise < /span> <
        /h2> <
        p className = "text-lg text-accent/80 max-w-3xl mx-auto" >
        A comprehensive toolkit
        for building modern web applications and digital experiences. <
        /p> <
        /motion.div>

        { /* Skills Grid */ } <
        div className = "grid lg:grid-cols-2 gap-12" > {
            skillCategories.map((category, categoryIndex) => ( <
                motion.div key = { category.title }
                variants = { itemVariants }
                whileHover = {
                    { scale: 1.02 } }
                className = "glass p-8 rounded-2xl card-hover" >
                { /* Category Header */ } <
                div className = "flex items-center space-x-4 mb-6" >
                <
                div className = "p-3 bg-gradient-to-br from-primary to-secondary rounded-xl" >
                <
                category.icon className = "text-background text-2xl" / >
                <
                /div> <
                div >
                <
                h3 className = "text-2xl font-bold text-accent" > { category.title } < /h3> <
                p className = "text-accent/70 text-sm" > { category.description } < /p> <
                /div> <
                /div>

                { /* Skills List */ } <
                div className = "space-y-4" > {
                    category.skills.map((skill, index) => ( <
                        SkillBar key = { skill.name }
                        skill = { skill }
                        index = { index }
                        />
                    ))
                } <
                /div> <
                /motion.div>
            ))
        } <
        /div>

        { /* Additional Info */ } <
        motion.div variants = { itemVariants }
        className = "mt-16 text-center" >
        <
        div className = "glass p-8 rounded-2xl max-w-4xl mx-auto" >
        <
        h3 className = "text-2xl font-bold text-accent mb-4" >
        Always Learning & Growing <
        /h3> <
        p className = "text-accent/80 mb-6 max-w-2xl mx-auto" >
        Technology evolves rapidly, and so do I.I 'm constantly exploring new frameworks, 
        tools, and methodologies to stay at the forefront of web development. <
        /p> <
        div className = "flex flex-wrap justify-center gap-4" >
        <
        span className = "px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium" >
        Continuous Learning <
        /span> <
        span className = "px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium" >
        Open Source <
        /span> <
        span className = "px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium" >
        Best Practices <
        /span> <
        span className = "px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium" >
        Innovation <
        /span> <
        /div> <
        /div> <
        /motion.div> <
        /motion.div> <
        /div> <
        /section>
    );
};

export default Skills;