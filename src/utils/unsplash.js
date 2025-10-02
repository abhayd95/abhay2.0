/**
 * Unsplash Image Utilities
 * 
 * Helper functions for working with Unsplash images
 * 
 * Usage:
 * import { getUnsplashImage, getUnsplashSearch } from './utils/unsplash';
 * 
 * // Get a specific Unsplash image
 * const imageUrl = getUnsplashImage('photo-1234567890', { width: 400, height: 300 });
 * 
 * // Get random images from a search term
 * const randomImages = getUnsplashSearch('technology', { count: 5 });
 */

/**
 * Generate optimized Unsplash image URL
 * @param {string} photoId - Unsplash photo ID
 * @param {object} options - Image options
 * @returns {string} Optimized Unsplash URL
 */
export const getUnsplashImage = (photoId, options = {}) => {
    const {
        width = 400,
        height = 300,
        fit = 'crop',
        quality = 80,
        format = 'auto'
    } = options;

    return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=${fit}&auto=${format}&q=${quality}`;
};

/**
 * Generate Unsplash search URL for random images
 * @param {string} query - Search query
 * @param {object} options - Search options
 * @returns {string} Unsplash search URL
 */
export const getUnsplashSearch = (query, options = {}) => {
    const {
        count = 10,
        orientation = 'landscape'
    } = options;

    return `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=${orientation}`;
};

/**
 * Popular Unsplash photo IDs for common categories
 */
export const UNSplash_PHOTOS = {
    // Technology
    technology: [
        'photo-1518709268805-4e9042af2176', // Code on screen
        'photo-1555066931-4365d14bab8c', // Laptop with code
        'photo-1461749280684-dccba630e2f6', // Coding setup
        'photo-1516321318423-f06f85e504b3', // Developer workspace
        'photo-1504639725590-34d0984388bd'  // Modern office
    ],
    
    // Web Development
    webdev: [
        'photo-1551650975-87deedd944c3', // Web development
        'photo-1460925895917-afdab827c52f', // Analytics dashboard
        'photo-1551288049-bebda4e38f71', // Data visualization
        'photo-1551650975-87deedd944c3', // Web design
        'photo-1555066931-4365d14bab8c'  // Programming
    ],
    
    // Design
    design: [
        'photo-1558655146-9f40138edfeb', // Design workspace
        'photo-1558618666-fcd25c85cd64', // Creative process
        'photo-1558618666-fcd25c85cd64', // Design tools
        'photo-1558655146-9f40138edfeb', // UI/UX design
        'photo-1558618666-fcd25c85cd64'  // Graphic design
    ],
    
    // Portfolio
    portfolio: [
        'photo-1551650975-87deedd944c3', // Portfolio website
        'photo-1460925895917-afdab827c52f', // Project showcase
        'photo-1551288049-bebda4e38f71', // Creative portfolio
        'photo-1551650975-87deedd944c3', // Design portfolio
        'photo-1555066931-4365d14bab8c'  // Developer portfolio
    ]
};

/**
 * Get random photo ID from a category
 * @param {string} category - Photo category
 * @returns {string} Random photo ID
 */
export const getRandomPhotoId = (category = 'technology') => {
    const photos = UNSplash_PHOTOS[category] || UNSplash_PHOTOS.technology;
    return photos[Math.floor(Math.random() * photos.length)];
};

/**
 * Get random Unsplash image URL
 * @param {string} category - Photo category
 * @param {object} options - Image options
 * @returns {string} Random Unsplash image URL
 */
export const getRandomUnsplashImage = (category = 'technology', options = {}) => {
    const photoId = getRandomPhotoId(category);
    return getUnsplashImage(photoId, options);
};
