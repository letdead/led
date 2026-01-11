import { useState, useMemo } from 'react';
import { filterProducts } from '../utils/helpers';
import { products } from '../data/products';
import { FILTER_DEFAULTS } from '../constants';

/**
 * Custom hook for managing products state and filtering
 * @param {Array} initialProducts - Initial products array
 * @returns {Object} Products state and filter handlers
 */
export const useProducts = (initialProducts = products) => {
  const [searchQuery, setSearchQuery] = useState(FILTER_DEFAULTS.SEARCH_QUERY);
  const [selectedCategory, setSelectedCategory] = useState(FILTER_DEFAULTS.CATEGORY);
  const [allProducts] = useState(initialProducts);

  const filteredProducts = useMemo(() => {
    return filterProducts(allProducts, searchQuery, selectedCategory);
  }, [allProducts, searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(allProducts.map(p => p.category));
    return [FILTER_DEFAULTS.CATEGORY, ...Array.from(uniqueCategories).sort()];
  }, [allProducts]);

  const resetFilters = () => {
    setSearchQuery(FILTER_DEFAULTS.SEARCH_QUERY);
    setSelectedCategory(FILTER_DEFAULTS.CATEGORY);
  };

  return {
    products: filteredProducts,
    allProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    resetFilters,
    hasActiveFilters: searchQuery !== FILTER_DEFAULTS.SEARCH_QUERY || selectedCategory !== FILTER_DEFAULTS.CATEGORY
  };
};

