import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/features/Hero';
import ProductsSection from './components/features/ProductsSection';
import ProductModal from './components/product/ProductModal';
import Footer from './components/layout/Footer';
import SupportPage from './components/pages/SupportPage'; // Ensure you create this file
import { useProducts } from './hooks/useProducts';
import { useModal } from './hooks/useModal';
import { SECTION_IDS } from './constants';
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
    <Router>
      <div className="App">
        {/* Header is outside Routes so it stays visible on every page */}
        <Header />
        
        <main>
          <Routes>
            {/* HOME PAGE ROUTE */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  {/* The ID here allows the Header "Products" link to scroll here */}
                  <div id={SECTION_IDS.PRODUCTS}>
                    <ProductsSection
                      products={products}
                      onProductClick={handleProductClick}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                      categories={categories}
                    />
                  </div>
                </>
              } 
            />

            {/* SUPPORT PAGE ROUTE */}
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Modal renders globally if a product is selected */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={closeModal}
          />
        )}
      </div>
    </Router>
  );
}

export default App;