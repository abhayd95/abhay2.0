import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ProfileImage Component
 * 
 * A robust image component for profile pictures with:
 * - Proper cropping and positioning (focuses on face area)
 * - Fallback handling for missing images
 * - Responsive design for all screen sizes
 * - Loading states and error handling
 * - Automatic image optimization
 * 
 * Usage Examples:
 * 
 * // Local image from public folder
 * <ProfileImage 
 *   src="/abhay.jpeg" 
 *   alt="Abhay Tiwari"
 *   fallbackText="AT"
 *   size="large"
 * />
 * 
 * // External URL
 * <ProfileImage 
 *   src="https://example.com/photo.jpg" 
 *   alt="Your Name"
 *   fallbackText="YN"
 *   size="medium"
 * />
 * 
 * // Base64 encoded image
 * <ProfileImage 
 *   src="data:image/jpeg;base64,..." 
 *   alt="Your Name"
 *   fallbackText="YN"
 *   size="large"
 * />
 * 
 * // Different positioning options
 * <ProfileImage src="/photo.jpg" position="face" />     // Focus on face
 * <ProfileImage src="/photo.jpg" position="center" />    // Center of image
 * <ProfileImage src="/photo.jpg" position="top" />       // Top of image
 * <ProfileImage src="/photo.jpg" position="custom" customPosition="center 10%" />
 * 
 * Props:
 * - src: Image URL (local path, external URL, or base64)
 * - alt: Alt text for accessibility
 * - fallbackText: Text to show if image fails (default: "AT")
 * - size: "small" | "medium" | "large" | "xlarge" (default: "large")
 * - position: "face" | "center" | "top" | "custom" (default: "face")
 * - customPosition: Custom object-position value (e.g., "center 10%")
 * - className: Additional CSS classes
 */

// Utility function to validate image source
const isValidImageSource = (src) => {
    if (!src) return false;
    
    // Check for common image formats
    const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
    const base64Pattern = /^data:image\/(jpeg|jpg|png|gif|webp|svg);base64,/;
    const urlPattern = /^https?:\/\/.+/;
    
    return imageExtensions.test(src) || base64Pattern.test(src) || urlPattern.test(src);
};

const ProfileImage = ({ 
    src, 
    alt = "Profile Picture", 
    fallbackText = "AT",
    size = "large",
    position = "face", // "face", "center", "top", "custom"
    customPosition = "center 5%",
    className = "",
    ...props 
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    // Validate image source on mount
    React.useEffect(() => {
        if (!isValidImageSource(src)) {
            setImageError(true);
        }
    }, [src]);

    // Size configurations for responsive design
    const sizeConfig = {
        small: "w-16 h-16 text-lg",
        medium: "w-24 h-24 text-xl", 
        large: "w-32 h-32 md:w-40 md:h-40 text-2xl md:text-3xl",
        xlarge: "w-48 h-48 md:w-56 md:h-56 text-4xl md:text-5xl"
    };

    // Position configurations for different image types
    const positionConfig = {
        face: "center top",      // Focus on very top for face area
        center: "center center", // Center of image
        top: "center top",       // Top of image
        upper: "center 5%",      // Upper portion
        veryTop: "center 0%",    // Very top
        custom: customPosition   // Custom position
    };

    const handleImageLoad = () => {
        console.log('Image loaded successfully:', src);
        console.log('Using position:', positionConfig[position] || positionConfig.face);
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = (e) => {
        console.log('Image failed to load:', src, e);
        setImageError(true);
        setImageLoaded(false);
    };

    return (
        <div className={`relative ${sizeConfig[size]} ${className}`}>
            {/* Main Image */}
            <motion.img
                src={src}
                alt={alt}
                className={`
                    ${sizeConfig[size]} 
                    rounded-full 
                    object-cover 
                    border-4 
                    border-primary/20 
                    shadow-2xl
                    transition-opacity 
                    duration-300
                    ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}
                `}
                onLoad={handleImageLoad}
                onError={handleImageError}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                    // Use position configuration for flexible image positioning
                    objectPosition: positionConfig[position] || positionConfig.face,
                    // Ensure proper image fitting
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                }}
                {...props}
            />

            {/* Fallback Avatar */}
            <motion.div
                className={`
                    ${sizeConfig[size]}
                    rounded-full 
                    bg-gradient-to-br 
                    from-primary/20 
                    to-secondary/20 
                    border-4 
                    border-primary/20 
                    shadow-2xl 
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
                {fallbackText}
            </motion.div>

            {/* Loading Spinner */}
            {!imageLoaded && !imageError && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                >
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </motion.div>
            )}

            {/* Animated Border Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary/30"
            />
        </div>
    );
};

export default ProfileImage;