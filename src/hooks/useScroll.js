import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking scroll position
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} Whether scroll threshold has been exceeded
 */
export const useScroll = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

