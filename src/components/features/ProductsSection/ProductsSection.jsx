import SearchBar from '../SearchBar';
import CategoryFilter from '../CategoryFilter';
import ProductCard from '../../product/ProductCard';
import { UI_TEXT, SECTION_IDS } from '../../../constants';
import './ProductsSection.css';

const ProductsSection = ({
  products,
  onProductClick,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}) => {
  return (
    <section id={SECTION_IDS.PRODUCTS} className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{UI_TEXT.PRODUCTS.TITLE}</h2>
          <p className="section-subtitle">{UI_TEXT.PRODUCTS.SUBTITLE}</p>
        </div>

        <div className="filters">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            placeholder={UI_TEXT.PRODUCTS.SEARCH_PLACEHOLDER}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>

        {products.length === 0 ? (
          <div className="no-results">
            <p>{UI_TEXT.PRODUCTS.NO_RESULTS}</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

