import { useState, useEffect } from 'react';
import { KEY_CODES, MODAL_ANIMATION_DELAY } from '../constants';

/**
 * Custom hook for managing modal state
 * @returns {Object} Modal state and handlers
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
    // Delay clearing selectedItem for smooth close animation
    setTimeout(() => setSelectedItem(null), MODAL_ANIMATION_DELAY);
  };

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === KEY_CODES.ESCAPE) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return {
    isOpen,
    selectedItem,
    openModal,
    closeModal
  };
};

