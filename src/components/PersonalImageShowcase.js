import React from 'react';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';
import { getRandomUnsplashImage } from '../utils/unsplash';

/**
 * PersonalImageShowcase Component
 * 
 * Showcases personal images alongside Unsplash images
 * 
 * Usage:
 * <PersonalImageShowcase />
 */

const PersonalImageShowcase = () => {
    const personalImages = [
        {
            src: "/abhay.jpeg",
            title: "Abhay Tiwari",
            description: "Full Stack Developer & Creative Video Editor",
            category: "personal",
            featured: true
        },
        {
            src: getRandomUnsplashImage('technology', { width: 400, height: 300 }),
            title: "Development Work",
            description: "Working on modern web applications",
            category: "work"
        },
        {
            src: getRandomUnsplashImage('design', { width: 400, height: 300 }),
            title: "Creative Projects",
            description: "UI/UX design and creative solutions",
            category: "creative"
        },
        {
            src: getRandomUnsplashImage('webdev', { width: 400, height: 300 }),
            title: "Portfolio Projects",
            description: "Showcasing my latest work and achievements",
            category: "portfolio"
        }
    ];

    return (
        <section className="py-20 bg-background-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Personal Showcase</span>
                    </h2>
                    <p className="text-lg text-accent/80 max-w-3xl mx-auto">
                        A mix of personal photos and professional work showcasing my journey as a developer.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {personalImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <ImageCard
                                src={image.src}
                                alt={image.title}
                                title={image.title}
                                description={image.description}
                                size="medium"
                                onClick={() => console.log(`Clicked on ${image.title}`)}
                            />
                            {image.featured && (
                                <div className="absolute -top-2 -right-2 z-10">
                                    <span className="px-3 py-1 bg-primary text-background text-xs font-semibold rounded-full shadow-lg">
                                        Personal
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Personal Image Usage Examples */}
                <div className="mt-16 p-8 glass rounded-2xl">
                    <h3 className="text-2xl font-bold text-accent mb-6">Using Your Personal Image</h3>
                    <div className="space-y-4 text-accent/80">
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Personal Image Card:</h4>
                            <code className="block bg-background-dark p-3 rounded text-sm">
                                {`<ImageCard src="/abhay.jpeg" title="Abhay Tiwari" description="Full Stack Developer" />`}
                            </code>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Mixed with Unsplash:</h4>
                            <code className="block bg-background-dark p-3 rounded text-sm">
                                {`<ImageCard src={getRandomUnsplashImage('technology')} title="Tech Project" />`}
                            </code>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Featured Personal Image:</h4>
                            <code className="block bg-background-dark p-3 rounded text-sm">
                                {`<ImageCard src="/abhay.jpeg" title="About Me" featured={true} />`}
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalImageShowcase;
