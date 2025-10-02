import React from 'react';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';
import { getRandomUnsplashImage, getUnsplashImage } from '../utils/unsplash';

/**
 * UnsplashImageGallery Component
 * 
 * Example component showing how to use Unsplash images in cards
 * 
 * Usage Examples:
 * 
 * // Random images from categories
 * <UnsplashImageGallery />
 * 
 * // Specific Unsplash image
 * <ImageCard 
 *   src={getUnsplashImage('photo-1518709268805-4e9042af2176', { width: 400, height: 300 })}
 *   title="Coding Setup"
 *   description="Modern development workspace"
 * />
 * 
 * // Random image from category
 * <ImageCard 
 *   src={getRandomUnsplashImage('technology', { width: 400, height: 300 })}
 *   title="Tech Project"
 *   description="Latest technology project"
 * />
 */

const UnsplashImageGallery = () => {
    const imageCards = [
        {
            src: getRandomUnsplashImage('technology', { width: 400, height: 300 }),
            title: "Web Development",
            description: "Modern web development with React and Node.js",
            category: "technology"
        },
        {
            src: getRandomUnsplashImage('design', { width: 400, height: 300 }),
            title: "UI/UX Design",
            description: "Creative design solutions for modern applications",
            category: "design"
        },
        {
            src: getRandomUnsplashImage('webdev', { width: 400, height: 300 }),
            title: "Full Stack Projects",
            description: "Complete web applications with frontend and backend",
            category: "webdev"
        },
        {
            src: getRandomUnsplashImage('portfolio', { width: 400, height: 300 }),
            title: "Portfolio Showcase",
            description: "Showcasing creative work and projects",
            category: "portfolio"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Unsplash Image Gallery</span>
                    </h2>
                    <p className="text-lg text-accent/80 max-w-3xl mx-auto">
                        Example gallery showing how to integrate Unsplash images into your portfolio cards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {imageCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ImageCard
                                src={card.src}
                                alt={card.title}
                                title={card.title}
                                description={card.description}
                                size="medium"
                                onClick={() => console.log(`Clicked on ${card.title}`)}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Usage Examples */}
                <div className="mt-16 p-8 glass rounded-2xl">
                    <h3 className="text-2xl font-bold text-accent mb-6">Usage Examples</h3>
                    <div className="space-y-4 text-accent/80">
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Random Unsplash Image:</h4>
                            <code className="block bg-background-dark p-3 rounded text-sm">
                                {`const imageUrl = getRandomUnsplashImage('technology', { width: 400, height: 300 });`}
                            </code>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Specific Unsplash Image:</h4>
                            <code className="block bg-background-dark p-3 rounded text-sm">
                                {`const imageUrl = getUnsplashImage('photo-1518709268805-4e9042af2176', { width: 400, height: 300 });`}
                            </code>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">In ImageCard Component:</h4>
                            <code className="block bg-background-dark p-3 rounded text-sm">
                                {`<ImageCard src={imageUrl} title="My Project" description="Project description" />`}
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnsplashImageGallery;
