/**
 * Filters products based on search query and category
 * @param {Array} products - Array of product objects
 * @param {string} searchQuery - Search term
 * @param {string} selectedCategory - Selected category filter
 * @returns {Array} Filtered products
 */
export const filterProducts = (products, searchQuery, selectedCategory) => {
  let filtered = products;

  // Filter by category
  if (selectedCategory && selectedCategory !== "All") {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  // Filter by search query
  if (searchQuery && searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.size.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }

  return filtered;
};

/**
 * Formats price with currency symbol
 * @param {number} price - Price value
 * @param {string} currency - Currency symbol (default: $)
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, currency = "$") => {
  return `${currency}${price.toFixed(2)}`;
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Clamps a number between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Checks if element is in viewport
 * @param {Element} element - DOM element
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector
 * @param {Object} options - Scroll options
 */
export const scrollToElement = (selector, options = {}) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      ...options
    });
  }
};

