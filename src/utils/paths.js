export const BASE_URL = '/bgc/kushal/';

export const getAssetPath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    
    // Remove leading slash from path if it exists
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    return `${BASE_URL}${cleanPath}`;
};
