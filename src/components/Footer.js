import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return ( <
        footer className = "bg-background-dark border-t border-accent/10" >
        <
        div className = "container mx-auto px-6 py-12" >
        <
        div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" > { /* Brand Section */ } <
        div className = "lg:col-span-2" >
        <
        motion.div initial = {
            { opacity: 0, y: 30 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.6 }
        }
        className = "mb-6" >
        <
        div className = "flex items-center space-x-3 mb-4" >
        <
        div className = "w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center" >
        <
        span className = "text-background font-bold" > AV < /span> < /
        div > <
        span className = "text-2xl font-bold gradient-text" > Abhay Virus < /span> < /
        div > <
        p className = "text-accent/70 leading-relaxed max-w-md" >
        Full - stack developer passionate about creating digital experiences that blend creativity with cutting - edge technology. <
        /p> < /
        motion.div > <
        /div>

        { /* Quick Links */ } <
        motion.div initial = {
            { opacity: 0, y: 30 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.6, delay: 0.2 }
        } >
        <
        h3 className = "text-lg font-semibold text-accent mb-4" > Quick Links < /h3> <
        ul className = "space-y-3" >
        <
        li > < a href = "#about"
        className = "text-accent/70 hover:text-primary transition-colors duration-300" > About < /a></li >
        <
        li > < a href = "#skills"
        className = "text-accent/70 hover:text-primary transition-colors duration-300" > Skills < /a></li >
        <
        li > < a href = "#projects"
        className = "text-accent/70 hover:text-primary transition-colors duration-300" > Projects < /a></li >
        <
        li > < a href = "#contact"
        className = "text-accent/70 hover:text-primary transition-colors duration-300" > Contact < /a></li >
        <
        /ul> < /
        motion.div >

        { /* Contact Info */ } <
        motion.div initial = {
            { opacity: 0, y: 30 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.6, delay: 0.3 }
        } >
        <
        h3 className = "text-lg font-semibold text-accent mb-4" > Get In Touch < /h3> <
        div className = "space-y-3" >
        <
        p className = "text-accent/70" > hello @abhayvirus.dev < /p> <
        p className = "text-accent/70" > San Francisco, CA < /p> < /
        div > <
        /motion.div> < /
        div >

        { /* Bottom Section */ } <
        motion.div initial = {
            { opacity: 0, y: 30 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.6, delay: 0.4 }
        }
        className = "border-t border-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between" >
        <
        div className = "flex items-center space-x-2 text-accent/70 mb-4 md:mb-0" >
        <
        span > & copy; { currentYear }
        Abhay Virus.Made with < /span> <
        FaHeart className = "text-primary animate-pulse" / >
        <
        span > and < /span> <
        FaCode className = "text-primary" / >
        <
        /div>

        <
        motion.button onClick = {
            () => window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        whileHover = {
            { scale: 1.05 }
        }
        whileTap = {
            { scale: 0.95 }
        }
        className = "flex items-center space-x-2 px-4 py-2 glass rounded-lg text-accent hover:text-primary transition-colors duration-300" >
        <
        span > Back to Top < /span> < /
        motion.button > <
        /motion.div>

        { /* Tech Stack */ } <
        motion.div initial = {
            { opacity: 0, y: 30 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.6, delay: 0.5 }
        }
        className = "text-center mt-8 pt-8 border-t border-accent/5" >
        <
        p className = "text-accent/50 text-sm" >
        Built with React, Framer Motion, and lots of☕ <
        /p> < /
        motion.div > <
        /div> < /
        footer >
    );
};

export default Footer;