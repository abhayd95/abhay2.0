import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ImageCard Component
 * 
 * A flexible image card component that supports:
 * - Unsplash images via URL
 * - Local images
 * - Fallback handling
 * - Responsive design
 * - Hover effects
 * 
 * Usage Examples:
 * 
 * // Unsplash image
 * <ImageCard 
 *   src="https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop"
 *   alt="Project Screenshot"
 *   title="My Project"
 *   description="Project description"
 * />
 * 
 * // Local image
 * <ImageCard 
 *   src="/images/project.jpg"
 *   alt="Project Screenshot"
 *   title="My Project"
 *   description="Project description"
 * />
 * 
 * Props:
 * - src: Image URL (Unsplash, local, or external)
 * - alt: Alt text for accessibility
 * - title: Card title
 * - description: Card description
 * - size: "small" | "medium" | "large" (default: "medium")
 * - className: Additional CSS classes
 * - onClick: Click handler function
 */

const ImageCard = ({ 
    src, 
    alt = "Image", 
    title = "",
    description = "",
    size = "medium",
    className = "",
    onClick = null,
    ...props 
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Size configurations
    const sizeConfig = {
        small: "w-64 h-48",
        medium: "w-80 h-60", 
        large: "w-96 h-72"
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(false);
    };

    // Generate Unsplash URL with proper parameters
    const getOptimizedUrl = (url) => {
        if (url.includes('unsplash.com')) {
            // Add Unsplash optimization parameters
            const baseUrl = url.split('?')[0];
            return `${baseUrl}?w=400&h=300&fit=crop&auto=format&q=80`;
        }
        return url;
    };

    return (
        <motion.div
            className={`
                ${sizeConfig[size]} 
                ${className}
                relative 
                overflow-hidden 
                rounded-xl 
                bg-background-light 
                border 
                border-accent/10
                cursor-pointer
                group
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            {...props}
        >
            {/* Image Container */}
            <div className="relative w-full h-3/4 overflow-hidden">
                {/* Main Image */}
                <motion.img
                    src={getOptimizedUrl(src)}
                    alt={alt}
                    className={`
                        w-full 
                        h-full 
                        object-cover 
                        transition-opacity 
                        duration-300
                        ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}
                    `}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />

                {/* Fallback Image */}
                <motion.div
                    className={`
                        absolute 
                        inset-0 
                        bg-gradient-to-br 
                        from-primary/20 
                        to-secondary/20 
                        flex 
                        items-center 
                        justify-center 
                        text-primary 
                        font-bold
                        transition-opacity 
                        duration-300
                        ${!imageLoaded || imageError ? 'opacity-100' : 'opacity-0'}
                    `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: (!imageLoaded || imageError) ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="text-center">
                        <div className="text-4xl mb-2">📷</div>
                        <div className="text-sm">Image</div>
                    </div>
                </motion.div>

                {/* Loading Spinner */}
                {!imageLoaded && !imageError && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-background-light"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                    >
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </motion.div>
                )}

                {/* Overlay on Hover */}
                <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <div className="text-white text-center">
                        <div className="text-2xl mb-2">👁️</div>
                        <div className="text-sm">View Details</div>
                    </div>
                </motion.div>
            </div>

            {/* Content Area */}
            {(title || description) && (
                <div className="p-4 h-1/4 flex flex-col justify-center">
                    {title && (
                        <h3 className="text-accent font-semibold text-sm mb-1 line-clamp-1">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className="text-accent/70 text-xs line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </motion.div>
    );
};

export default ImageCard;
