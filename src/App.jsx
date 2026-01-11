import { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/features/Hero';
import ProductsSection from './components/features/ProductsSection';
import ProductModal from './components/product/ProductModal';
import Footer from './components/layout/Footer';
import { useProducts } from './hooks/useProducts';
import { useModal } from './hooks/useModal';
import './App.css';

function App() {
  const {
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories
  } = useProducts();

  const { selectedItem: selectedProduct, openModal, closeModal } = useModal();

  const handleProductClick = (product) => {
    openModal(product);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductsSection
        products={products}
        onProductClick={handleProductClick}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App

